import React, { useState } from "react";
import {
  Box,  
  TextArea
} from 'grommet';

function LBTextBox(props) {
    const [value, setValue] = useState('');

    const handleChange = event => {
        setValue(event.target.value);
        props.setBoxData({
            data:event.target.value,
            type:'lbText'
        })
    }
    return (
        <Box pad="medium" width='large' fill>
            <TextArea
                placeholder={'Type or Ctrl + V'}
                value={value}
                onChange={handleChange}
                cols="100"
                rows="5"
                fill={true}

            />
        </Box>
    )
}

export default LBTextBox;