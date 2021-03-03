import React, { useState, useEffect } from "react";
import {
  Box,  
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBody,  
  TextInput,
  Heading,  
  Tip,
  Markdown
} from 'grommet';

import {    
    ShareOption,  
    Trash,
    Download,
    DocumentLocked,
    UserAdmin,
    Copy,
    Code,
    FormView,
    Hide
  } from 'grommet-icons';

  import Prism from 'prismjs';
  import '../src/assets/css/prism.css';

import { addLocalBox,deleteBox, fetchBox, linkFromWords, shareBox } from './lockboxUtils.js';
import { Spinner } from './Spinner.js';

import { copyText } from './helpers/utils.js';

function BoxReader(props) {
    const [loading, setLoading] = useState(true)
    const [boxData, setBoxData] = useState(undefined)
    const [error, setError] = useState(undefined)
    const [hidePassword, setHidePassword] = useState(true)

    useEffect(() => {
        const getBox = async () => {
            const boxResponse = await fetchBox(props.sentence)
            
            if (boxResponse.status === 'error'){
                //alert(boxResponse.message)
                setError(boxResponse.message)                
            }
            else {                
                let boxPayload = JSON.parse(boxResponse.data)                
                setBoxData(boxPayload);                     
                    
                addLocalBox(linkFromWords(props.sentence), boxPayload.expiry, new Date(boxPayload.saveDate));
                Prism.highlightAll()
            }
            setLoading(false)
        } 
        getBox();        
        
    }, [loading, props.sentence]); 

    const download = (filename, text) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
      
        element.style.display = 'none';
        document.body.appendChild(element);
      
        element.click();
      
        document.body.removeChild(element);
      } 

    return (
        <Box pad="none" direction="column" width='auto'>
            {loading && <Box fill="vertical" align="center" justify="center" direction="column"><Spinner /></Box>}
            
            {error && <Card height="auto" width="xlarge" border={{color:"brand"}} elevation="large" align="center">
                <Heading color="brand">{error}</Heading>
            </Card>}
            
            {boxData && 
                <Card height="auto" width={boxData.type === 'lbCode' ? 'auto' : 'xlarge'} border={{color:"brand"}} elevation="large" margin="none">
                    <CardHeader pad="small" gap="medium" background="brand">                    
                        {boxData.type === 'lbText' && <DocumentLocked size="large" margin="small"/>}
                        {boxData.type === 'lbLogin' && <UserAdmin size="large" margin="small"/>}
                        {boxData.type === 'lbCode' && <Code size="large" margin="small"/>}
                        <Heading level='4'>{'#' + props.sentence}</Heading>
                    </CardHeader>
                    <CardBody pad="none">
                        <Box direction="row" justify="center">                        
                            {boxData.type === 'lbText' && <Box margin="small"><Markdown options={{ forceBlock: true }}>{boxData.data}</Markdown></Box>}
                            {boxData.type === 'lbLogin' && 
                                <Box direction="column" align="center" margin="medium" width="xlarge">
                                    <Box direction="row" fill>
                                        <TextInput size="large" label="username" disabled value={boxData.data.split(',')[0]} />
                                        <Button icon={<Copy/>} onClick={() => copyText(boxData.data.split(',')[0])} title="Copy Username"/>
                                    </Box>
                                    <Box direction="row" fill>
                                        <TextInput size="large" label="password" type={hidePassword ? "password" : "text"} disabled value={boxData.data.split(',')[1]}/>
                                        <Button icon={hidePassword ? <FormView/> : <Hide/>} onClick={() => setHidePassword(!hidePassword)} title={hidePassword ? "View Password" : "Hide Password"}/>
                                        <Button icon={<Copy/>} onClick={() => copyText(boxData.data.split(',')[1])} title="Copy Password"/>
                                    </Box>
                                </Box>
                            }
                            {boxData.type === 'lbCode' && <pre style={{width:"100%", margin:"0"}}><code className={boxData.lang ? "language-" + boxData.lang : "language-js"}>
                                { boxData.data }
                        </code></pre>}
                        
                        </Box>
                    </CardBody>
                    <CardFooter pad={{horizontal: "small"}} >   
                        <Tip content="Delete this box">
                            <Button
                                icon={<Trash color="red" />}
                                hoverIndicator
                                onClick={() => {deleteBox(props.sentence)}}
                            />
                        </Tip>
                        
                        <Tip content="Download contents">
                            <Button
                                icon={<Download />}
                                hoverIndicator
                                onClick={() => {download('Lockbox-'+props.sentence, boxData.data)}}
                            />
                        </Tip>
                        <Tip content="Copy link to clipboard">
                            <Button 
                                icon={<ShareOption color="brand" />} 
                                hoverIndicator 
                                onClick={() => {shareBox({
                                    title: 'Lockbox',
                                    text: '#' + props.sentence,
                                    url: window.location.href,
                                })}}
                            />  
                        </Tip>
                        
                    </CardFooter>
                </Card>
            }            
        </Box>
    )
}

export default BoxReader;