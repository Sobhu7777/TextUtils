import React,{useState} from 'react'

export default function TextForm(props) {
    const textupclick = ()=>{
        // console.log("clicked"+text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    const textloclick = ()=>{
      // console.log("clicked"+text)
      let newText=text.toLowerCase()
      setText(newText)
  }
  const textcapclick = ()=>{
    // console.log("clicked"+text)
    let newText=text[0].toUpperCase()+text.slice(1).toLowerCase()
    setText(newText)
}
const textclearclick = ()=>{
  // console.log("clicked"+text)
  let newText=''
  setText(newText)
}
const textcopyclick = ()=>{
  var text=document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
}
    const textupchange = (event)=>{
        // console.log("changed")
        setText(event.target.value)
    }
    
    const[text,setText]=useState("")
    // text="new text"  wrong way
    // setText("new text") // Right Way
  return (
      <>
      
      <div style={props.mystyle} className='textbox my-4 mx-5'>
      <div className="container">
      <h1>{props.head}</h1>
      <div className="">
        <textarea className="form-control" id="myBox" rows="6" value={text} style={props.mystyle} onChange={textupchange}></textarea>
      </div>
  <button  className="btn btn-primary mt-3 mx-1" onClick={textupclick}>UpperCase</button>
  <button  className="btn btn-primary mt-3 mx-1" onClick={textloclick}>LowerCase</button>
  <button  className="btn btn-primary mt-3 mx-1" onClick={textcapclick}>Capitalize first word</button>
  <button  className="btn btn-primary mt-3 mx-1" onClick={textcopyclick}>Copy Text</button>
  <button  className="btn btn-primary mt-3 mx-1" onClick={textclearclick}>Clear Text</button>
  
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter(word => word.length > 0).length} Words and {text.replace(/\s+/g,"").length} Characters</p>
        <p>{0.0036* text.split(/\s+/).filter(word => word.length > 0).length *60} Seconds to read</p>
        <p>{0.005* text.split(/\s+/).filter(word => word.length > 0).length *60} Seconds to Speak</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter a Text to preview it here'}</p>
      </div>
      </div>
      
  </>
  )
}
