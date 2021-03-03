// This is a set of pure JS functions to do various lockbox operations like generating mnemonics, cryptographic wrappers, API call handlers etc

import { getData, postData, deleteData } from './lbFetch.js'
import words from './fixtures/words.json';
import { copyText } from './helpers/utils.js';
import pkg from './../package.json'

//Evaluates the current browser URL and returns the hash string if one is found
//https://lockbox.space/ => false
//https://lockbox.space/#someurlhash => "someurlhash"
export const checkURLFragment = () => {
    return window.location.hash.substr(1) || false;     
}

//Returns a rendom mnemonic sentence of given length from words
export const wordList = (length) => {
    let result = "";
    let array = window.crypto.getRandomValues(new Uint32Array(length));
    for (var i = 0; i < length; i++) {
        result += words.bip39[array[i] % words.bip39.length] + "-";
    }
    return result.substring(0, result.length - 1);
};

//pre-pends the site domain to a mnemonic string + '#' to create a complete lockbox URL
export const linkFromWords = words => {  
  try {
    return pkg.homepage + '#' + words;    
  } catch (error) {
    console.log(error);
    return false;
  }  
}

//strips the site domain from a complete lockbox URL and returns just the mnemonic string
export const wordsFromLink = link => {  
  try {
    return link.split('#')[1];
  } catch (error) {
    console.log(error);    
    return false;
  }
}

//encodes data for input to cryptographic functions
const getMessageEncoding = (message) => {
  let enc = new TextEncoder();
  return enc.encode(message);
};

//concatenates the last 2 words of the mnemonic, then computes a SHA-256 on the result. This serves as the salt input to PBKDF2 for key generation from a mnemonic sentences
const getSalt = async (sentence) => {
  let saltInput = sentence.split('-')[3] + sentence.split('-')[4]  
  let salt = new Uint8Array(16);
  let enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    enc.encode(saltInput)
  );
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  for (let i = 0; i < 16; i++) {
    salt[i] = hashArray[i];
  }
  return salt;
};

//Returns keymaterial that be fed to deriveKey()
const getKeyMaterial = async (sentence) => {
  let keyInput = sentence.split('-')[0] + sentence.split('-')[1] + sentence.split('-')[2]
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(keyInput),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"]
  );
};

// convert from arraybuffer to hex
const arrayBuffer2hex = (buffer) => {
    var dv = new DataView(buffer),
        i,
        len,
        hex = "",
        c;
  
    for (i = 0, len = dv.byteLength; i < len; i += 1) {
        c = dv.getUint8(i).toString(16);
        if (c.length < 2) {
            c = "0" + c;
        }
        hex += c;
    }
    return hex;
};
  
//computes a SHA-512 of a rearranged mnemonic to produce a unique box identifier to POST to the API
const getBoxIdentifier = async (sentence) => {
    let enc = new TextEncoder();
    let input = sentence.split('-')[1] + sentence.split('-')[2] + sentence.split('-')[3] + sentence.split('-')[0].length + sentence.split('-')[4].length
    return crypto.subtle
        .digest("SHA-512", enc.encode(input))
        .then(function (digest) {
            return arrayBuffer2hex(digest);
        })
        .catch(function (e) {
            console.error(e);
            throw e;
        });
  };
  

//Wrapper for  encryption module
const lb_encrypt = async (sentence, plaintext) => {
  const encoded = getMessageEncoding(plaintext); //encode plaintext  
  const salt = await getSalt(sentence);
  const keyMaterial = await getKeyMaterial(sentence);

  //derive key from mnemonic
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 200000,
      hash: "SHA-512",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );

  //encrypt
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const ctBuffer = await window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encoded
  );
  const ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array
  const ctStr = ctArray.map((byte) => String.fromCharCode(byte)).join(""); // ciphertext as string
  const ctBase64 = btoa(ctStr); // encode ciphertext as base64
  const ivHex = Array.from(iv)
    .map((b) => ("00" + b.toString(16)).slice(-2))
    .join(""); // iv as hex string

  const hashStr = await getBoxIdentifier(sentence);

  return {
    ciphertext: ivHex + ctBase64,
    hash: hashStr,
  };
};

//Wrapper for decryption module
const lb_decrypt = async (sentence, ciphertext) => {    
    const salt = await getSalt(sentence);
    const keyMaterial = await getKeyMaterial(sentence);

    //Derive Key
    const key = await window.crypto.subtle.deriveKey(
        {
        name: "PBKDF2",
        salt: salt,
        iterations: 200000,
        hash: "SHA-512",
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );

    const iv = ciphertext
        .slice(0, 24)
        .match(/.{2}/g)
        .map((byte) => parseInt(byte, 16)); // get iv from ciphertext
    const ctStr = atob(ciphertext.slice(24));
    // decode base64 ciphertext
    const ctUint8 = new Uint8Array(
        ctStr.match(/[\s\S]/g).map((ch) => ch.charCodeAt(0))
    );
    const ptBuffer = await window.crypto.subtle.decrypt(
        {
        name: "AES-GCM",
        iv: new Uint8Array(iv),
        },
        key,
        ctUint8
    );

    const plaintext = new TextDecoder().decode(ptBuffer);

    return plaintext;
};

//contruct payload, send POST to API
export async function sendLockRequest(data, expiryDays) {
    if (data.data === "" || (data.type === "lbLogin" && data.data === ",")) {
        return {
            status:'error',
            message:'Box is empty!'
        }
      
    } else {      
      
      //add saveDate and expiry to plaintext payload
      data.expiry = expiryDays;
      data.saveDate= new Date()

      let attempts = 0;
      let saved = false;
      while (saved === false && attempts < 5) {
        try {
          let sentence = wordList(5);
  
          const payload = await lb_encrypt(sentence, JSON.stringify(data));
  
          const response = await postData(
            { data: payload.ciphertext, hash: payload.hash, expiry: expiryDays }            
          );
          //console.log(JSON.stringify(response));
          if (response.saved === "true") {
            saved = true;
            var url = linkFromWords(sentence);
            return {
                status:'success',
                message:url
            }            
            
          }
          attempts += 1;
          //alert(attempts)
          if (attempts === 5) {
            return {
                status:'error',
                message:'Failed to lock after 5 attempts!'
            }
          }
        } catch (error) {
          console.error(error);
          return {
            status:'error',
            message:error
        }
        }
      }
    }
}

//wrapper for API GET given a mnemonic sentence
export async function fetchBox(sentence) {
    let s = decodeURIComponent(sentence);
    if (s != null) {
        
        const hashStr = await getBoxIdentifier(sentence);
        const response = await getData('?hash='+hashStr);        

        //console.log(response);
        if (response && response !== 404) {
            let pt = await lb_decrypt(s, response.data);        
            return {
                status:'success',
                data:pt
            }
            
        } else {
            deleteLocalBox(pkg.homepage+'#'+sentence)
            return {
                status:'error',
                message:'Nothing here ¯\\_(ツ)_/¯'
            }
        }
    }

}

//wrapper for API DELETE given a mnemonic sentence
export async function deleteBox(sentence) {  
  if (window.confirm("This will permanently delete your data. Are you sure?")){
    const boxId = await getBoxIdentifier(sentence);
    const response = await deleteData(
      { hash: boxId },      
    );
    if (response){
      deleteLocalBox(pkg.homepage+'#'+sentence)
      window.location.reload();
    }    
  }
  return false;  
}

//Attempts to invoke the device natice share API, falls back to copying the URL to clipboard
export async function shareBox(shareData) {
  try {
    await navigator.share(shareData)
    console.log('Box shared successfully')
  } catch(err) {
    console.log(err)
    console.log('Box copied')
    copyText(shareData.url)
  }
}

//returns the boxes saved in localStorage
export function getLocalBoxes() {
  return JSON.parse(localStorage.getItem('boxes')) || [];
}

//adds a new box to localStorage boxes
export function addLocalBox(link, expiry, saveDate=new Date()) {
  const boxes = getLocalBoxes();
  if (!boxes.some(box => box.link === link)) {
    //boxes doesn't already contain this link    
    boxes.push({
      link:link,
      expiry: expiry,
      saveDate:saveDate
    })
  }
  localStorage.setItem('boxes', JSON.stringify(boxes));
}

//deletes a box from localStorage boxes
function deleteLocalBox(link) {
  const boxes = getLocalBoxes();
  localStorage.setItem('boxes', JSON.stringify(boxes.filter((box) => box.link !== link))) 

}

function addDays(date, days){
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + Number(days))
  return copy
}

export function expiryDate(saveDate, expiryDays){        
  if (saveDate){            
      return addDays(new Date(saveDate), expiryDays)                     
  }
  return false;
}