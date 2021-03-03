import React, { useState, useEffect } from "react";

import {
  Box,
  Button,
  Text, 
  Tabs,
  Tab,
  RangeInput,
  Tip,
  Heading,
  Paragraph,
  CheckBox

} from 'grommet';
import {   
    DocumentLocked,
    UserAdmin,
    Unlock,  
    Code
} from 'grommet-icons';

import { wordList, sendLockRequest, addLocalBox } from './lockboxUtils.js'

import  LBTextBox  from './LBTextBox.js'
import  LBLoginBox  from './LBLoginBox.js'
import  LBCodeBox  from './LBCodeBox.js'
import LinkCard from "./linkCard";
import { Spinner } from './Spinner.js';

const tabs = [
    {
        name:'Secure Note',        
        type:'lbText',
        icon:<DocumentLocked/>
    },
    {
        name:"Login",
        type:'lbLogin',
        icon:<UserAdmin/>
    },
    {
        name:"Code Snippet",
        type:'lbCode',
        icon:<Code/>
    }
]


function NewBoxForm(props) {
 
    const [activeTab, setActiveTab] = useState(0)
    const [boxData, setBoxData] = useState({data:'', type:'lbText'})
    const [expiry, setExpiry] = useState('30')
    const [words, setWords] = useState(wordList(5))  
    const [locked, setLocked] = useState(false)    
    const [lockedLink, setLockedLink] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const [save, setSave] = useState(true)
    

    //update link when boxData changes
    useEffect(() => {        
        let newWords = wordList(5)
        setWords(newWords);        
    }, [boxData]);

    useEffect(() => {
        if (lockedLink && save){ 
            addLocalBox(lockedLink, expiry, new Date())
        }        
        
    }, [lockedLink, save])
    const lockBox = async () => {
        setLoading(true);
        let lockResponse = await sendLockRequest(boxData, expiry)        
        if (lockResponse.status === 'error'){
            alert(lockResponse.message)
            return false;
        }
        
        setLoading(false);
        setLocked(true);
        setLockedLink(lockResponse.message);        
        return true;                
    }
    return (
        <Box direction="column" pad={props.size && props.size  === 'small' ? "none" : "medium"}>
            {loading && <Box fill="vertical" align="center" justify="center" direction="column"><Spinner /></Box>}
            {(!locked && !loading) && <Box direction="column" align="center">
                {(props.size && props.size  !== 'small') && <Box align="center">
                    <Heading>lockbox</Heading>
                    <Paragraph color="text-xweak">Share secrets with E2E encryption on the edge</Paragraph>
                </Box>}
                
                
                <Tabs pad="large" activeIndex={activeTab} onActive={(index) => {setActiveTab(index)}}>
                    {tabs.map((tab) => (
                        <Tab title={tab.name} icon={tab.icon} key={tab.name}>
                            <Box pad="small" fill>
                            {tab.type === 'lbText' && <LBTextBox setBoxData={setBoxData}/>}    
                            {tab.type === 'lbLogin' && <LBLoginBox setBoxData={setBoxData}/>}  
                            {tab.type === 'lbCode' && <LBCodeBox setBoxData={setBoxData}/>}                                  
                            </Box>
                        </Tab>
                    ))}
                </Tabs>
                <Box direction={props.size && props.size === 'small' ? "column" : "row"}>
                    <Box direction="row" pad="medium" justify="between">
                        <Box direction="row" justify="between" align="center" flex="grow" gap="medium">
                            <Text pad={{ left: 'small', right: 'large', vertical: 'small' }}>Link Expiry: {expiry} days</Text>
                        </Box>
                        <Box direction="column" pad="small" justify="between">
                            <Tip content="Change expiry">
                                <RangeInput
                                    min={1}
                                    max={365}
                                    steps={1}
                                    value={expiry}                      
                                    onChange={event => setExpiry(event.target.value)}
                                />
                            </Tip>
                        </Box>
                    </Box>
                    <Box direction="row" pad="small" justify="between">
                        <Tip content="Save this box in your Saved Boxes">
                            <Box direction="row" pad="medium" justify="between">                            
                                <CheckBox
                                    checked={save}
                                    label="Save"
                                    onChange={(event) => setSave(event.target.checked)}
                                />                                                    
                            </Box>
                        </Tip>
                    </Box>
                </Box>

                <Box direction="column" pad="small" width="large">                    
                    <Tip content="Lock this box">
                        <Button
                            icon={<Unlock/>}
                            onClick={() => {lockBox()}}
                            label={'#'+words}
                            disabled={boxData.data === ''}   
                            primary={boxData.data !== ''}      
                            size="large"   
                            align="start"                                 
                        />
                    </Tip>                        
                </Box>
                
            </Box>}
            
            {(locked && lockedLink) && <LinkCard value={lockedLink} expiry={expiry}/>}
        </Box>    
    );
}

export default NewBoxForm;
