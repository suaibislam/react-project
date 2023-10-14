import React,{useState} from 'react'

export default function Textbox(props) {

                const handleUpclick =()=>{
                        let newText=text.toUpperCase();
                        setText(newText)
                        }

        const handleOneChange=(event)=>{
              setText(event.target.value)
        }

        
        const [text,setText] =useState('Enter text here2')
  return (
      
    <div>
          <h1>{props.headding}</h1>
          <div className="mb-3 "> 
            <textarea className="form-control" value={text} onChange={handleOneChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
    </div>
  )
}
