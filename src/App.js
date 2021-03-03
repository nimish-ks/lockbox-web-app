import React, { useState, useEffect } from "react";
import pkg from './../package.json'
import {
  Box,
  Button,  
  Collapsible,
  Heading,  
  Grommet,
  ResponsiveContext,
  Layer,
  Nav,
  Anchor,
  Main,  
  Card,
  CardBody,
  CardHeader  
} from 'grommet';
import { 
  FormClose,   
  Sun, 
  Moon,
  Menu,
  Checkmark,
  Paint,
  Archive,  
  Lock,
  Home,
  Help,
  Github

} from 'grommet-icons';

import LBOrange from './themes/LBTheme_Orange.json';
import LBRed from './themes/LBTheme_Red.json';
import LBTeal from './themes/LBTheme_Teal.json';
import AMRGreen from './themes/LBTheme_AMRGreen.json'

import { checkURLFragment } from './lockboxUtils.js'

import  NewBoxForm  from './NewBoxForm.js'
import BoxReader from './BoxReader.js'
import About from "./about";
import SavedBoxes from './SavedBoxes.js'

const themes = [
  {
    'name':'Teal',
    'json':LBTeal
  },
  {
    'name':'Orange',
    'json':LBOrange
  }, 
  {
    'name':'Red',
    'json':LBRed
  },
  {
    'name':'Green',
    'json':AMRGreen
  }  
]

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='end'      
      justify='between'
      //background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'none' }}      
      elevation='xsmall'      
      style={{position:"sticky", top:"0", width:"100%"}}    
      background="background-front"  
      responsive
      {...props}
    />
);

const SideBar = (props) =>  (
  <Box
    direction='column'    
    pad="none"
    gap="small"   
    justify="start" 
    {...props} 
    responsive
  >
    <Card pad="small" flex="grow">
      <CardHeader pad="none"><Paint/><Heading level="4">Theme</Heading></CardHeader>
      <CardBody>
      <Box
        direction='row'    
        pad="medium"      
        justify="between"   
        flex="grow"
        //height="250px"     
        
      >    
        {themes.map((theme) => (
          <Button 
            key={theme.json.name}
            onClick={() => {props.setTheme(theme);}}                 
            primary        
            margin="small"
            style={{background: theme.json.global.colors.brand.light, height:"50px", width:"50px", borderRadius:"50%", border:"none"}}
            icon={theme.json.name === props.themeColor.name ? <Checkmark/> : null}          
            title={theme.json.name}
          />
        ))}
      </Box>
      </CardBody>
    </Card>
    <Card pad="small" >
      <CardHeader><Archive/><Heading level="4">Saved Boxes</Heading></CardHeader>
      <CardBody>
        <SavedBoxes />
      </CardBody>
    </Card>
    
  </Box>
);

//return the saved themeColor from localStorage, or fallback to first theme in themes[]
const defaultThemeColor = () => {
  const savedTheme =  localStorage.getItem('themeColor')    
  if (savedTheme) {
    const themeJSON = themes.find( ({name}) => name === savedTheme).json;
    return themeJSON || themes[0].json    
  }  
  return themes[0].json
}

//return saved themeMode from localStorage or fallback to light theme
const defaultThemeMode = () => {
  const savedThemeMode =  localStorage.getItem('themeMode')
  return savedThemeMode || 'dark';  
}


function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [themeColor, setThemeColor] = useState(defaultThemeColor());
  const [themeMode, setThemeMode] = useState(defaultThemeMode())    
  const [mode, setMode] = useState('new')
  const [showAbout, setShowAbout] = useState(false);
  const urlFragment = checkURLFragment()  
  
  //check for url fragment
  useEffect(() => {        
    if (urlFragment) { 
      setMode('open')       
    }
  }, [urlFragment]); 
  
  const handleSetThemeColor = color => {    
    setThemeColor(color.json);
    localStorage.setItem('themeColor', color.name)
  }

  const handleSetThemeMode = mode => {
    setThemeMode(mode);
    localStorage.setItem('themeMode', mode)
  }
  return (
    <Grommet theme={themeColor} themeMode={themeMode}>
      <ResponsiveContext.Consumer>
        {size => (
            <Box style={{minHeight:"100vh"}}>
              <AppBar>
                <Anchor hoverIndicator={false} href={pkg.homepage}><Heading level='3' margin='small' color="brand">{size === 'small' ? <Home color="brand"/> : "lockbox"}</Heading></Anchor>
                
                <Box align="end" direction='row'>
                  <Nav direction="row"  pad="medium" align="end">                    
                    <Anchor href="#" onClick={() => setShowAbout(true)} label={size === 'small' ? <Help color="brand"/> : "About"} hoverIndicator color="brand"/>
                    <Anchor href="https://gitlab.com/lockbox-app" target="_blank" label={size === 'small' ? <Github color="brand"/> : "Source Code"} hoverIndicator color="brand"/>
                  </Nav>
                </Box>
                <Box align="end" direction='row' margin='small'>
                  <Button
                    icon={<Menu />}
                    onClick={() => setShowSidebar(!showSidebar)}
                  />
                  <Button
                    icon={themeMode === 'light' ? <Moon /> : <Sun/>}
                    onClick={() => handleSetThemeMode(themeMode === 'light' ? 'dark' : 'light')}
                  />
                </Box>
              </AppBar>
              
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }} align="center" fill>
                <Main pad="small" justify="center" align="center">                                    
                  {mode === 'new' && <NewBoxForm size={size} />}
                  {mode === 'open' && <BoxReader sentence={urlFragment} size={size}/>}                  
                </Main>
                
                {showAbout && <Layer> 
                  <Box                          
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowAbout(false)}
                      />
                    </Box>
                    <Box
                      fill                          
                      align='center'
                      justify='center'
                    >
                      <About/>
                  </Box>
                </Layer>}
                
                {(!showSidebar || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                    <Box                      
                      flex
                      width='medium'                                            
                      elevation='small'
                      align='start'
                      justify='between'
                      fill="horizontal"                      
                    >
                      <SideBar setTheme={handleSetThemeColor} themeColor={themeColor} height="90vh"></SideBar>
                    </Box>
                  </Collapsible>
                  ): (
                      <Layer>
                        <Box
                          
                          tag='header'
                          justify='end'
                          align='center'
                          direction='row'
                        >
                          <Button
                            icon={<FormClose />}
                            onClick={() => setShowSidebar(false)}
                          />
                        </Box>
                        <Box
                          fill                          
                          align='center'
                          justify='center'
                        >
                          <SideBar setTheme={handleSetThemeColor} themeColor={themeColor}></SideBar>
                        </Box>
                      </Layer>
              )}
              </Box>
            </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
