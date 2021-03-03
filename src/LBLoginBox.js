import React, { useState, useEffect } from "react";
import {
  Box,  
  TextInput
} from 'grommet';

function LBLoginBox(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const updateBoxData = () => {
        if (username && password) {
            props.setBoxData({
                data:username + ',' + password,
                type:'lbLogin'
            })
            return true
        }
        props.setBoxData({
            data:'',
            type:'lbLogin'
        })
        return false
    }
    
    const handleUsernameChange = event => {
        setUsername(event.target.value);        
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value);
        props.setBoxData(username + ',' + password)
    }

     
    useEffect(() => {        
        updateBoxData();
    }, [username, password]); 

    return (
        <Box pad="medium" direction="column" width='medium'>
            <TextInput
                placeholder="username"
                value={username}
                onChange={event => handleUsernameChange(event)}      
                type="username"                
            />
            <TextInput
                placeholder="password"
                value={password}
                onChange={event => handlePasswordChange(event)}        
                type="password"                
            />
        </Box>
    )
}

export default LBLoginBox;