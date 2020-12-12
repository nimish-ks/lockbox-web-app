var api_base_url = "https://lockbox.space/api/";
var expiryDays = 1;
var activeTab = "lbText";
var lang = "js";
var linkUrl = "";
var bip39_english=['abandon','ability','able','about','above','absent','absorb','abstract','absurd','abuse','access','accident','account','accuse','achieve','acid','acoustic','acquire','across','act','action','actor','actress','actual','adapt','add','addict','address','adjust','admit','adult','advance','advice','aerobic','affair','afford','afraid','again','age','agent','agree','ahead','aim','air','airport','aisle','alarm','album','alcohol','alert','alien','all','alley','allow','almost','alone','alpha','already','also','alter','always','amateur','amazing','among','amount','amused','analyst','anchor','ancient','anger','angle','angry','animal','ankle','announce','annual','another','answer','antenna','antique','anxiety','any','apart','apology','appear','apple','approve','april','arch','arctic','area','arena','argue','arm','armed','armor','army','around','arrange','arrest','arrive','arrow','art','artefact','artist','artwork','ask','aspect','assault','asset','assist','assume','asthma','athlete','atom','attack','attend','attitude','attract','auction','audit','august','aunt','author','auto','autumn','average','avocado','avoid','awake','aware','away','awesome','awful','awkward','axis','baby','bachelor','bacon','badge','bag','balance','balcony','ball','bamboo','banana','banner','bar','barely','bargain','barrel','base','basic','basket','battle','beach','bean','beauty','because','become','beef','before','begin','behave','behind','believe','below','belt','bench','benefit','best','betray','better','between','beyond','bicycle','bid','bike','bind','biology','bird','birth','bitter','black','blade','blame','blanket','blast','bleak','bless','blind','blood','blossom','blouse','blue','blur','blush','board','boat','body','boil','bomb','bone','bonus','book','boost','border','boring','borrow','boss','bottom','bounce','box','boy','bracket','brain','brand','brass','brave','bread','breeze','brick','bridge','brief','bright','bring','brisk','broccoli','broken','bronze','broom','brother','brown','brush','bubble','buddy','budget','buffalo','build','bulb','bulk','bullet','bundle','bunker','burden','burger','burst','bus','business','busy','butter','buyer','buzz','cabbage','cabin','cable','cactus','cage','cake','call','calm','camera','camp','can','canal','cancel','candy','cannon','canoe','canvas','canyon','capable','capital','captain','car','carbon','card','cargo','carpet','carry','cart','case','cash','casino','castle','casual','cat','catalog','catch','category','cattle','caught','cause','caution','cave','ceiling','celery','cement','census','century','cereal','certain','chair','chalk','champion','change','chaos','chapter','charge','chase','chat','cheap','check','cheese','chef','cherry','chest','chicken','chief','child','chimney','choice','choose','chronic','chuckle','chunk','churn','cigar','cinnamon','circle','citizen','city','civil','claim','clap','clarify','claw','clay','clean','clerk','clever','click','client','cliff','climb','clinic','clip','clock','clog','close','cloth','cloud','clown','club','clump','cluster','clutch','coach','coast','coconut','code','coffee','coil','coin','collect','color','column','combine','come','comfort','comic','common','company','concert','conduct','confirm','congress','connect','consider','control','convince','cook','cool','copper','copy','coral','core','corn','correct','cost','cotton','couch','country','couple','course','cousin','cover','coyote','crack','cradle','craft','cram','crane','crash','crater','crawl','crazy','cream','credit','creek','crew','cricket','crime','crisp','critic','crop','cross','crouch','crowd','crucial','cruel','cruise','crumble','crunch','crush','cry','crystal','cube','culture','cup','cupboard','curious','current','curtain','curve','cushion','custom','cute','cycle','dad','damage','damp','dance','danger','daring','dash','daughter','dawn','day','deal','debate','debris','decade','december','decide','decline','decorate','decrease','deer','defense','define','defy','degree','delay','deliver','demand','demise','denial','dentist','deny','depart','depend','deposit','depth','deputy','derive','describe','desert','design','desk','despair','destroy','detail','detect','develop','device','devote','diagram','dial','diamond','diary','dice','diesel','diet','differ','digital','dignity','dilemma','dinner','dinosaur','direct','dirt','disagree','discover','disease','dish','dismiss','disorder','display','distance','divert','divide','divorce','dizzy','doctor','document','dog','doll','dolphin','domain','donate','donkey','donor','door','dose','double','dove','draft','dragon','drama','drastic','draw','dream','dress','drift','drill','drink','drip','drive','drop','drum','dry','duck','dumb','dune','during','dust','dutch','duty','dwarf','dynamic','eager','eagle','early','earn','earth','easily','east','easy','echo','ecology','economy','edge','edit','educate','effort','egg','eight','either','elbow','elder','electric','elegant','element','elephant','elevator','elite','else','embark','embody','embrace','emerge','emotion','employ','empower','empty','enable','enact','end','endless','endorse','enemy','energy','enforce','engage','engine','enhance','enjoy','enlist','enough','enrich','enroll','ensure','enter','entire','entry','envelope','episode','equal','equip','era','erase','erode','erosion','error','erupt','escape','essay','essence','estate','eternal','ethics','evidence','evil','evoke','evolve','exact','example','excess','exchange','excite','exclude','excuse','execute','exercise','exhaust','exhibit','exile','exist','exit','exotic','expand','expect','expire','explain','expose','express','extend','extra','eye','eyebrow','fabric','face','faculty','fade','faint','faith','fall','false','fame','family','famous','fan','fancy','fantasy','farm','fashion','fat','fatal','father','fatigue','fault','favorite','feature','february','federal','fee','feed','feel','female','fence','festival','fetch','fever','few','fiber','fiction','field','figure','file','film','filter','final','find','fine','finger','finish','fire','firm','first','fiscal','fish','fit','fitness','fix','flag','flame','flash','flat','flavor','flee','flight','flip','float','flock','floor','flower','fluid','flush','fly','foam','focus','fog','foil','fold','follow','food','foot','force','forest','forget','fork','fortune','forum','forward','fossil','foster','found','fox','fragile','frame','frequent','fresh','friend','fringe','frog','front','frost','frown','frozen','fruit','fuel','fun','funny','furnace','fury','future','gadget','gain','galaxy','gallery','game','gap','garage','garbage','garden','garlic','garment','gas','gasp','gate','gather','gauge','gaze','general','genius','genre','gentle','genuine','gesture','ghost','giant','gift','giggle','ginger','giraffe','girl','give','glad','glance','glare','glass','glide','glimpse','globe','gloom','glory','glove','glow','glue','goat','goddess','gold','good','goose','gorilla','gospel','gossip','govern','gown','grab','grace','grain','grant','grape','grass','gravity','great','green','grid','grief','grit','grocery','group','grow','grunt','guard','guess','guide','guilt','guitar','gun','gym','habit','hair','half','hammer','hamster','hand','happy','harbor','hard','harsh','harvest','hat','have','hawk','hazard','head','health','heart','heavy','hedgehog','height','hello','helmet','help','hen','hero','hidden','high','hill','hint','hip','hire','history','hobby','hockey','hold','hole','holiday','hollow','home','honey','hood','hope','horn','horror','horse','hospital','host','hotel','hour','hover','hub','huge','human','humble','humor','hundred','hungry','hunt','hurdle','hurry','hurt','husband','hybrid','ice','icon','idea','identify','idle','ignore','ill','illegal','illness','image','imitate','immense','immune','impact','impose','improve','impulse','inch','include','income','increase','index','indicate','indoor','industry','infant','inflict','inform','inhale','inherit','initial','inject','injury','inmate','inner','innocent','input','inquiry','insane','insect','inside','inspire','install','intact','interest','into','invest','invite','involve','iron','island','isolate','issue','item','ivory','jacket','jaguar','jar','jazz','jealous','jeans','jelly','jewel','job','join','joke','journey','joy','judge','juice','jump','jungle','junior','junk','just','kangaroo','keen','keep','ketchup','key','kick','kid','kidney','kind','kingdom','kiss','kit','kitchen','kite','kitten','kiwi','knee','knife','knock','know','lab','label','labor','ladder','lady','lake','lamp','language','laptop','large','later','latin','laugh','laundry','lava','law','lawn','lawsuit','layer','lazy','leader','leaf','learn','leave','lecture','left','leg','legal','legend','leisure','lemon','lend','length','lens','leopard','lesson','letter','level','liar','liberty','library','license','life','lift','light','like','limb','limit','link','lion','liquid','list','little','live','lizard','load','loan','lobster','local','lock','logic','lonely','long','loop','lottery','loud','lounge','love','loyal','lucky','luggage','lumber','lunar','lunch','luxury','lyrics','machine','mad','magic','magnet','maid','mail','main','major','make','mammal','man','manage','mandate','mango','mansion','manual','maple','marble','march','margin','marine','market','marriage','mask','mass','master','match','material','math','matrix','matter','maximum','maze','meadow','mean','measure','meat','mechanic','medal','media','melody','melt','member','memory','mention','menu','mercy','merge','merit','merry','mesh','message','metal','method','middle','midnight','milk','million','mimic','mind','minimum','minor','minute','miracle','mirror','misery','miss','mistake','mix','mixed','mixture','mobile','model','modify','mom','moment','monitor','monkey','monster','month','moon','moral','more','morning','mosquito','mother','motion','motor','mountain','mouse','move','movie','much','muffin','mule','multiply','muscle','museum','mushroom','music','must','mutual','myself','mystery','myth','naive','name','napkin','narrow','nasty','nation','nature','near','neck','need','negative','neglect','neither','nephew','nerve','nest','net','network','neutral','never','news','next','nice','night','noble','noise','nominee','noodle','normal','north','nose','notable','note','nothing','notice','novel','now','nuclear','number','nurse','nut','oak','obey','object','oblige','obscure','observe','obtain','obvious','occur','ocean','october','odor','off','offer','office','often','oil','okay','old','olive','olympic','omit','once','one','onion','online','only','open','opera','opinion','oppose','option','orange','orbit','orchard','order','ordinary','organ','orient','original','orphan','ostrich','other','outdoor','outer','output','outside','oval','oven','over','own','owner','oxygen','oyster','ozone','pact','paddle','page','pair','palace','palm','panda','panel','panic','panther','paper','parade','parent','park','parrot','party','pass','patch','path','patient','patrol','pattern','pause','pave','payment','peace','peanut','pear','peasant','pelican','pen','penalty','pencil','people','pepper','perfect','permit','person','pet','phone','photo','phrase','physical','piano','picnic','picture','piece','pig','pigeon','pill','pilot','pink','pioneer','pipe','pistol','pitch','pizza','place','planet','plastic','plate','play','please','pledge','pluck','plug','plunge','poem','poet','point','polar','pole','police','pond','pony','pool','popular','portion','position','possible','post','potato','pottery','poverty','powder','power','practice','praise','predict','prefer','prepare','present','pretty','prevent','price','pride','primary','print','priority','prison','private','prize','problem','process','produce','profit','program','project','promote','proof','property','prosper','protect','proud','provide','public','pudding','pull','pulp','pulse','pumpkin','punch','pupil','puppy','purchase','purity','purpose','purse','push','put','puzzle','pyramid','quality','quantum','quarter','question','quick','quit','quiz','quote','rabbit','raccoon','race','rack','radar','radio','rail','rain','raise','rally','ramp','ranch','random','range','rapid','rare','rate','rather','raven','raw','razor','ready','real','reason','rebel','rebuild','recall','receive','recipe','record','recycle','reduce','reflect','reform','refuse','region','regret','regular','reject','relax','release','relief','rely','remain','remember','remind','remove','render','renew','rent','reopen','repair','repeat','replace','report','require','rescue','resemble','resist','resource','response','result','retire','retreat','return','reunion','reveal','review','reward','rhythm','rib','ribbon','rice','rich','ride','ridge','rifle','right','rigid','ring','riot','ripple','risk','ritual','rival','river','road','roast','robot','robust','rocket','romance','roof','rookie','room','rose','rotate','rough','round','route','royal','rubber','rude','rug','rule','run','runway','rural','sad','saddle','sadness','safe','sail','salad','salmon','salon','salt','salute','same','sample','sand','satisfy','satoshi','sauce','sausage','save','say','scale','scan','scare','scatter','scene','scheme','school','science','scissors','scorpion','scout','scrap','screen','script','scrub','sea','search','season','seat','second','secret','section','security','seed','seek','segment','select','sell','seminar','senior','sense','sentence','series','service','session','settle','setup','seven','shadow','shaft','shallow','share','shed','shell','sheriff','shield','shift','shine','ship','shiver','shock','shoe','shoot','shop','short','shoulder','shove','shrimp','shrug','shuffle','shy','sibling','sick','side','siege','sight','sign','silent','silk','silly','silver','similar','simple','since','sing','siren','sister','situate','six','size','skate','sketch','ski','skill','skin','skirt','skull','slab','slam','sleep','slender','slice','slide','slight','slim','slogan','slot','slow','slush','small','smart','smile','smoke','smooth','snack','snake','snap','sniff','snow','soap','soccer','social','sock','soda','soft','solar','soldier','solid','solution','solve','someone','song','soon','sorry','sort','soul','sound','soup','source','south','space','spare','spatial','spawn','speak','special','speed','spell','spend','sphere','spice','spider','spike','spin','spirit','split','spoil','sponsor','spoon','sport','spot','spray','spread','spring','spy','square','squeeze','squirrel','stable','stadium','staff','stage','stairs','stamp','stand','start','state','stay','steak','steel','stem','step','stereo','stick','still','sting','stock','stomach','stone','stool','story','stove','strategy','street','strike','strong','struggle','student','stuff','stumble','style','subject','submit','subway','success','such','sudden','suffer','sugar','suggest','suit','summer','sun','sunny','sunset','super','supply','supreme','sure','surface','surge','surprise','surround','survey','suspect','sustain','swallow','swamp','swap','swarm','swear','sweet','swift','swim','swing','switch','sword','symbol','symptom','syrup','system','table','tackle','tag','tail','talent','talk','tank','tape','target','task','taste','tattoo','taxi','teach','team','tell','ten','tenant','tennis','tent','term','test','text','thank','that','theme','then','theory','there','they','thing','this','thought','three','thrive','throw','thumb','thunder','ticket','tide','tiger','tilt','timber','time','tiny','tip','tired','tissue','title','toast','tobacco','today','toddler','toe','together','toilet','token','tomato','tomorrow','tone','tongue','tonight','tool','tooth','top','topic','topple','torch','tornado','tortoise','toss','total','tourist','toward','tower','town','toy','track','trade','traffic','tragic','train','transfer','trap','trash','travel','tray','treat','tree','trend','trial','tribe','trick','trigger','trim','trip','trophy','trouble','truck','true','truly','trumpet','trust','truth','try','tube','tuition','tumble','tuna','tunnel','turkey','turn','turtle','twelve','twenty','twice','twin','twist','two','type','typical','ugly','umbrella','unable','unaware','uncle','uncover','under','undo','unfair','unfold','unhappy','uniform','unique','unit','universe','unknown','unlock','until','unusual','unveil','update','upgrade','uphold','upon','upper','upset','urban','urge','usage','use','used','useful','useless','usual','utility','vacant','vacuum','vague','valid','valley','valve','van','vanish','vapor','various','vast','vault','vehicle','velvet','vendor','venture','venue','verb','verify','version','very','vessel','veteran','viable','vibrant','vicious','victory','video','view','village','vintage','violin','virtual','virus','visa','visit','visual','vital','vivid','vocal','voice','void','volcano','volume','vote','voyage','wage','wagon','wait','walk','wall','walnut','want','warfare','warm','warrior','wash','wasp','waste','water','wave','way','wealth','weapon','wear','weasel','weather','web','wedding','weekend','weird','welcome','west','wet','whale','what','wheat','wheel','when','where','whip','whisper','wide','width','wife','wild','will','win','window','wine','wing','wink','winner','winter','wire','wisdom','wise','wish','witness','wolf','woman','wonder','wood','wool','word','work','world','worry','worth','wrap','wreck','wrestle','wrist','write','wrong','yard','year','yellow','you','young','youth','zebra','zero','zone','zoo'];


$(document).ready(function () {
  sendTextChangeHandler();
  document.getElementById("input").focus();
  var frag = checkURLFragment();
  if (frag != false) {
    var data = fetchData(frag);
    if (data != false) {
    }
  }
  const $valueSpan = $(".valueSpan");
  const $value = $("#expirySlider");
  $valueSpan.html($value.val() + " days");
  expiryDays = $value.val();
  $value.on("input change", () => {
    $valueSpan.html($value.val() + " days");
    expiryDays = $value.val();
  });
});

setLang = (l) => {
  lang = l;
};

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

//Returns a sentence of given length
makeid = (length) => {
  let result = "";
  let array = window.crypto.getRandomValues(new Uint32Array(length));
  for (var i = 0; i < length; i++) {
    result += bip39_english[array[i] % bip39_english.length] + "-";
  }
  return result.substring(0, result.length - 1);
};

//Handles onChange event of input field
sendTextChangeHandler = () => {
  var url = window.location.host + "/#" + makeid(5);
  document.getElementById("url").innerHTML = url;
  document.getElementById("qrcode").innerHTML = "";
  var qr = new QRCode(document.getElementById("qrcode"), url);
};

getMessageEncoding = (message) => {
  let enc = new TextEncoder();
  return enc.encode(message);
};

getSalt = async (sentence) => {
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
getKeyMaterial = async (sentence) => {
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

//Wrapper for  encryption module
lb_encrypt = async (sentence, plaintext) => {
  const encoded = getMessageEncoding(plaintext); //encode plaintext
  let enc = new TextEncoder();
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
lb_decrypt = async (sentence, ciphertext) => {
  const encoded = getMessageEncoding(data); //encode plaintext
  let enc = new TextEncoder();
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


//Handler for Send button click
async function sendInputHandler() {
  activeTab = document.getElementsByClassName("nav-link active")[0].id;

  if (activeTab == "lbText") {
    var data = JSON.stringify({
      type: "lbText",
      data: document.getElementById("input").value,
    });
  } else if (activeTab == "lbLogin") {
    var data = JSON.stringify({
      type: "lbLogin",
      data:
        document.getElementById("input_username").value +
        "," +
        document.getElementById("input_pw").value,
    });
  } else if (activeTab == "lbCode") {
    var data = JSON.stringify({
      type: "lbCode",
      data: editor.getValue(),
      lang: lang,
    });
  }

  if ((JSON.parse(data).data == "") || (activeTab == "lbLogin" && JSON.parse(data).data == ",")) {
    alert("Box is empty");
    document.getElementById("url").innerHTML = "Box is empty!";
    if (document.getElementById("url").style.display === "none") {
      console.log("hidden");
    }
    document.getElementById("url").style.display = "block";
    return false;
  } else {
    document.getElementById("send-wrapper").style.display = "none";
    document.getElementById("linkControls").style.display = "none";
    document.getElementById("loader").style.display = "inline-block";

    var attempts = 0;
    var saved = false;
    while (saved == false && attempts < 5) {
      try {
        sentence = makeid(5);

        const payload = await lb_encrypt(sentence, data);

        const response = await postData(
          { data: payload.ciphertext, hash: payload.hash, expiry: expiryDays },
          api_base_url
        );
        //console.log(JSON.stringify(response));
        if (response.saved == "true") {
          saved = true;
          var url = window.location.host + "/#" + sentence;
          linkUrl = url;
          document.getElementById("loader").style.display = "none";
          document.getElementById("url").innerHTML =
            '<a style="color:#149678" target="_blank" href="https://' +
            url +
            '" >' +
            url +
            "</a>";
          var element = document.getElementById("url");
          element.classList.remove("no-select");
          document.getElementById("send").style.display = "none";
          document.getElementById("qrcode").innerHTML = "";
          var qr = new QRCode(document.getElementById("qrcode"), url);
          document.getElementById("qrcode").style.display = "inline-block";
          document.getElementById("copy-btn").style.display = "inline-block";
          //location.reload(true);
          return true;
        }
        attempts += 1;
        //alert(attempts)
        if (attempts == 5) {
          document.getElementById("url").innerHTML = "Something went wrong";
          document.getElementById("loader").style.display = "none";
          return false;
        }
      } catch (error) {
        console.error(error);
        document.getElementById("url").innerHTML = error;
        document.getElementById("loader").style.display = "none";
        return false;
      }
    }
  }
}

// convert from arraybuffer to hex
arrayBuffer2hex = (buffer) => {
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

getBoxIdentifier = async (sentence) => {
  let enc = new TextEncoder();
  let input = sentence.split('-')[1] + sentence.split('-')[2] + sentence.split('-')[3] + sentence.split('-')[0].length + sentence.split('-')[4].length
  return crypto.subtle
    .digest("SHA-512", enc.encode(sentence))
    .then(function (digest) {
      return arrayBuffer2hex(digest);
    })
    .catch(function (e) {
      console.error(e);
      throw e;
    });
};

//Makes post request to API
async function postData(data = {}, url = "", token = "") {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

//Makes delete request to API
async function deleteData(data = {}, url = "", token = "") {
  const response = await fetch(url, {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

//Makes get request to API
async function getData(url = "", token = "") {
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
  });
  //console.log(response.status)
  if (response.status == 200) {
    return await response.json();
  } // parses JSON response into native JavaScript objects
  else {
    console.log("return false");
    return await response.status;
  }
}

function checkURLFragment() {
  if (window.location.hash.substr(1)) {
    return window.location.hash.substr(1);
  } else {
    return false;
  }
}

async function fetchData(sentence) {
  s = decodeURIComponent(sentence);
  if (s != null) {
    document.getElementById("links").style.display = "none";
    document.getElementById("recv-loader").style.visibility = "visible";
    document.getElementById("send-wrapper").style.display = "none";
    document.getElementById("linkControls").style.display = "none";

    const hashStr = await getBoxIdentifier(sentence);
    const response = await getData(api_base_url + "?hash=" + hashStr);

    //console.log(response);
    if (response && response != 404) {
      pt = await lb_decrypt(s, response.data);
      document.getElementById("input").style.display = "none";
      document.getElementById("url").style.display = "none";
      document.getElementById("send").style.display = "none";
      document.getElementById("qrcode").style.display = "none";

      pt_json = JSON.parse(pt);
      type = pt_json.type;
      if (type == "lbText") {
        document.getElementById("data").innerHTML = pt_json.data;
        document.getElementById("data").style.display = "block";
        
        $('#download').click(function(){
          download('Lockbox-Download-'+sentence+'.txt', document.getElementById("data").innerHTML)
        })
        $('#deleteBox').click(function(){
          deleteBox(sentence)
        })
        $('#download').show();
        $('#deleteBox').show();
      } else if (type == "lbLogin") {
        document.getElementById("data").innerHTML =
          "Username: <b>" +
          pt_json.data.split(",")[0] +
          '</b><button type="button" class="btn btn-outline-secondary" style="margin-left:15px;" onClick="copyText(\'' +
          pt_json.data.split(",")[0].toString() +
          '\');"><span class="oi" data-glyph="clipboard" title="Copy Username" aria-hidden="false"></span></button>';

        document.getElementById("data").innerHTML +=
          "\nPassword: <b>" +
          pt_json.data.split(",")[1] +
          '</b><button type="button" class="btn btn-outline-secondary" style="margin-left:15px;" onClick="copyText(\'' +
          pt_json.data.split(",")[1].toString() +
          '\');"><span class="oi" data-glyph="clipboard" title="Copy Password" aria-hidden="false"></span></button>';
        document.getElementById("data").style.display = "block";
        let textData = "Username: " + pt_json.data.split(",")[0] + "\nPassword: " + pt_json.data.split(",")[1]
        $('#download').click(function(){
          download(sentence+'.txt', textData)
        })
        $('#deleteBox').click(function(){
          deleteBox(sentence)
        })
        $('#download').show();
        $('#deleteBox').show();
      } else if (type == "lbCode") {
        var langClass = "language-" + pt_json.lang;

        document.getElementById("code-data").innerHTML = pt_json.data;
        document.getElementById("code-data").className = langClass;
        document.getElementById("prism-wrapper").style.display = "block";
       
        Prism.highlightAll();
        $('#download').click(function(){
          download(sentence+'.txt', document.getElementById("code-data").innerHTML)
        })
        $('#deleteBox').click(function(){
          deleteBox(sentence)
        })
        $('#download').show();
        $('#deleteBox').show();
      }

      document.getElementById("recv-loader").style.display = "none";
      return pt;
    } else {
      document.getElementById("recv-loader").style.display = "none";
      document.getElementById("data").innerHTML = "Nothing here ¯\\_(ツ)_/¯";
      document.getElementById("data").style.display = "block";
      return false;
    }
  }
}

function copyURL() {
  navigator.clipboard.writeText(encodeURI("https://" + linkUrl)).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    }
  );
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      /* clipboard successfully set */
    },
    function () {
      /* clipboard write failed */
    }
  );
}
  
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}  

deleteBox = async sentence => {  
  if (confirm("This will permanently delete your data. Are you sure?")){
    const boxId = await getBoxIdentifier(sentence);
    const response = await deleteData(
      { hash: boxId },
      api_base_url
    );
    window.location.reload();
  }
  else {
    return false;
  }
  
}
