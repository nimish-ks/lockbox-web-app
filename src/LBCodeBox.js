import React, { useState } from "react";
import {
  Box,  
  TextArea,
  Select 
} from 'grommet';

//className must correspond to className list for prismjs
const languages = [
    {
        name:'JavaScript',
        className:'js'
    },
    {
        name:'CSS',
        className:'css'
    },
    {
        name:'C++',
        className:'cpp'
    },
    {
        name:'Go',
        className:'go'
    },
    {
        name:'Python',
        className:'python'
    },
    {
        name:'Shell',
        className:'shell'
    }
]

function LBCodeBox(props) {
    const [value, setValue] = useState('');
    const [lang, setLang] = useState(languages[0].className)

    const handleChange = event => {
        setValue(event.target.value);
        props.setBoxData({
            data: event.target.value,
            type: 'lbCode',
            lang: lang.className
        })
    }

    
    return (
        <Box pad="medium" width='large' fill>
           
            <Select                
                icon
                placeholder="Language"
                options={languages}
                labelKey="name"
                valueKey="className"
                onChange={({ option }) => setLang(option)}
            />
            <TextArea
                placeholder={'console.log("hello world");'}
                value={value}
                onChange={handleChange}
                cols="100"
                rows="5"
                fill={true}

            />
        </Box>
    )
}

export default LBCodeBox;