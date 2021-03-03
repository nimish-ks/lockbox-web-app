import React, { useEffect, useState } from "react";
import {
  Box,    
  Accordion,
  AccordionPanel,    
  Text
} from 'grommet';

import {     
    FormUp,
    FormDown
  } from 'grommet-icons';


import { wordsFromLink, getLocalBoxes } from './lockboxUtils.js';
import SavedBox from './SavedBox'

function SavedBoxes(props) {
    const boxes = getLocalBoxes();
    const [openPanel, setOpenPanels] = useState([])

    const getDateString = date => {
        try {
            return new Date(date).toLocaleString('en-GB')
        } catch(error) {            
            return false
        }
    }

    const PanelHeader = (props) => (
        <Box direction="row" justify="between">
            <Box direction="column" pad="small">
                <Text weight="bold">{props.label}</Text>
                {props.date && <Text size="xsmall" color="text-weak">{props.date}</Text>}                
            </Box>
            <Box pad={{top:'medium', bottom:'medium', left:'none'}}>
                {(boxes[openPanel[0]] && boxes[openPanel[0]].link.split('#')[1] === props.label) ? <FormUp color="brand"/> : <FormDown color="brand"/>}
            </Box>
        </Box>
        
    )

    useEffect(() => {   
        console.log('calling getLocalBoxes()')     
        getLocalBoxes();
    }); 
    
    return (
        <Box pad="between" width='large' fill="horizontal" direction="column" overflow={{vertical:'scroll'}}>                    
            <Accordion onActive={(panels) => setOpenPanels(panels)}>
                {boxes.map((box) => (
                    <AccordionPanel 
                        key={box.link.split('#')[1]} 
                        label={box.link.split('#')[1]} 
                        color="brand" 
                        header={PanelHeader({
                            label:wordsFromLink(box.link),
                            date:getDateString(box.saveDate)
                        })}>
                        <SavedBox box={box}/>
                    </AccordionPanel>
                    
                ))}
            </Accordion>
        </Box>
    )
}

export default SavedBoxes;