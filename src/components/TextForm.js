import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!","success")
    }
    // const handleColourClick = () => {
    //     // console.log("Uppercase was clicked" + text);
    //     let newText = document.querySelector('textarea');
    //     newText = text(newText.style.color= "blue");
    
    //     setText(newText);
    //     props.showAlert("colour has been changed!","success")

    // }

    const handleCopy = () => {
        // console.log("Uppercase was clicked" + text);
        let text = document.querySelector('textarea');
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text copied to clipboard","success")

    
    }

    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!","success")

    }

    const handleExtraSpaces = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed extra spaces!","success")

    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("text cleared!","success")

    }

    const handleOnChange = (e) => {
        // console.log("on Change");
        setText(e.target.value);
    }
    const [text, setText] = useState("");
    // text = "new Text"; //Wrong way to change the state
    // setText = "new Text"; //Correct way to change the state
    return (
        <>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white': 'black'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleColourClick}>Colour text</button> */}
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove extra spaces</button>
                
            </div>
            <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} word,{text.length} characters</p>
                <p>It takes {0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
            
        </>
    )
}
