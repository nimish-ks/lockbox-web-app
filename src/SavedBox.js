import React from "react";
import {
  Box,  
  Anchor,
  Button,  
  Text
} from 'grommet';

import {   
    ShareOption,  
    Trash,    
  } from 'grommet-icons';

import QRCode from 'qrcode.react'
import { shareBox, deleteBox, expiryDate } from './lockboxUtils.js';

function SavedBox(props) {   
   
    
    return (
        <Box pad="between" width='large' fill="horizontal" direction="column">                    
            <Box pad="small" direction="row" justify="center">
                <Box pad="small">
                    <Anchor href={props.box.link} target="_blank">
                        <QRCode value={props.box.link} size={200}></QRCode>
                    </Anchor>
                </Box>
                <Box direction="column" justify="between">
                    <Button 
                        icon={<ShareOption color="brand"/>} 
                        
                        hoverIndicator 
                        onClick={() => {shareBox({
                            title: 'Lockbox',
                            text: '#' + props.box.link.split('#')[1],
                            url: props.box.link,
                        })}}
                    />
                    <Button
                        icon={<Trash color="red" />}
                        hoverIndicator
                        onClick={() => {deleteBox(props.box.link.split('#')[1])}}
                    />                                
                    
                </Box>
                
            </Box>
            <Box pad='small' align="center">
                {props.box.saveDate && <Text size="xsmall" color="text-weak">Expires on {expiryDate(props.box.saveDate, props.box.expiry).toLocaleString('en-GB')}</Text>}
            </Box>
        </Box>
    )
}

export default SavedBox;