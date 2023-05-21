import React, { useEffect } from 'react'
import { Box } from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import styled  from '@emotion/styled';

const Wrapper = styled.div`
    background-color: #f5f5f5;
`




const Editor = () => {

    useEffect(() => {
        const quillServer = new Quill('#container', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        })
    }, [])

    return (
        <Wrapper>
           <Box className="container" id="container">
            </Box>
        </Wrapper>
    )
}

export default Editor;


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
