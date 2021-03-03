import React, { useCallback, useState } from "react";
import QRCode from 'qrcode.react'
import {
  Box,
  Button,  
  ResponsiveContext,  
  Anchor,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Heading,
  Text
} from 'grommet';
import {    
  Lock,
  ShareOption,  
  Trash
} from 'grommet-icons';

import { shareBox, deleteBox } from './lockboxUtils.js';

function LinkCard(props) {

    
    const addDays = (date, days) => {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + Number(days))
        return copy
    }

    const expiryDate = expiry => {        
        if (expiry){            
            return addDays(new Date(), expiry)                     
        }
        return false;
    }

    return (
        <ResponsiveContext.Consumer>
        {size => ( 
        <Card height="auto" width="auto" background="brand" elevation="large" margin="small">
            <CardHeader pad="small"><Lock size={"large"}/><Heading level={"4"}>{'#' + props.value.split('#')[1]}</Heading></CardHeader>
            <CardBody pad="small">
                <Box direction={size === 'small' ? 'column': 'row'} align="center">
                    {props.value && <Box pad="small">
                        <Anchor href={props.value} target="_blank">
                            <QRCode value={props.value} size={200}></QRCode>
                        </Anchor>
                    </Box>}
                    <Box pad={{ left: 'small', right: 'large', vertical: 'medium' }} align="center" fill direction="column" >
                        <Anchor size={"xlarge"} color="#fff" href={props.value} target="_blank">{props.value}</Anchor>                    
                    </Box>
                </Box>
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} >   
                <Button
                    icon={<Trash color="red" />}
                    hoverIndicator
                    onClick={() => {deleteBox(props.value.split('#')[1])}}
                />
                {props.expiry && <Text color="text-xweak">Expires on {expiryDate(props.expiry).toLocaleString('en-GB')}</Text>}
                <Button 
                    icon={<ShareOption color="plain" />} 
                    hoverIndicator 
                    onClick={() => {shareBox({
                        title: 'Lockbox',
                        text: '#' + props.value.split('#')[1],
                        url: props.value,
                    })}}
                />
            </CardFooter>
        </Card>)}
        </ResponsiveContext.Consumer>
    );
}

export default LinkCard;
