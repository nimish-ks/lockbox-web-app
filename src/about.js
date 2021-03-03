import React, { useEffect, useState } from "react";
import {
  Box,
  Markdown
} from 'grommet';

import about from './about.md'
import { Spinner } from './Spinner.js';

function About(props) {    
    const [text, setText] = useState(undefined)

    useEffect(() => {
        fetch(about)
            .then(res => res.text())
            .then(post => setText(post))
            .catch((err) => console.error(err));
    })
    
    return (
        <Box pad="medium" fill>
            {!text && <Spinner />}
            {text && <Markdown>{text}</Markdown>}
        </Box>
    )
}

export default About;