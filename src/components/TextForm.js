import React, { useState } from 'react'

export default function TextForm(props) {

    const upHandler = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Text Converted To Uppercase", "success")
    }

    const loHandler = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Text Converted To Lowercase", "success")
    }

    const clrText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Textspace Cleared", "success")
    }

    const cpyText = () => {
        // navigator.clipboard.writeText(text).then(() => {
        //     alert('text copied to clipboard')
        // }, () => {
        //     alert('text failed to copy')
        // })
        navigator.clipboard.writeText(text)
        props.showAlert("Text Copied To Clipboard", "success")
    }

    const changeHandler = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    return (
        <>
            <h1 className="container my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
            <div className="container my-3">
                <label htmlFor="textarea" style={{color: props.mode === 'light' ? 'black' : 'white'}} className="myBox">Enter text below:</label>
                <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode === 'light' ? 'white' : '#181936', color: props.mode === 'light' ? 'black' : 'white'}} value={text} onChange={changeHandler}></textarea>
                <button type="button" className="btn btn-primary ms-2 my-2" onClick={upHandler}>Change to Uppercase</button>
                <button type="button" className="btn btn-primary ms-2 my-2" onClick={loHandler}>Change to Lowercase</button>
                <button type="button" className="btn btn-primary ms-2 my-2" onClick={clrText}>Clear Text</button>
                <button type="button" className="btn btn-primary ms-2 my-2" onClick={cpyText}>Copy Text</button>
            </div>
            
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview Text</h3>
                <p>{text.length>0 ? text : <i>Enter text in textbox to preview</i>}</p>
            </div>
        </>
    )
}