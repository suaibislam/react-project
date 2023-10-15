import React,{useState} from 'react'

export default function Textbox(props) {

                const handleUpclick =()=>{
                        let newText=text.toUpperCase();
                        setText(newText)
                       props.showAlert("Convert to Uppercase","success")
                        }

                const handlelowerclick=()=>{
                  let newText=text.toLowerCase();
                setText(newText)
                props.showAlert("Convert to lowercase","success")
                }

                const handlecopy=()=>{
                  var text = document.getElementById("myBox")
                  text.select();
                  navigator.clipboard.writeText(text.value)
                  props.showAlert("Convert to handlecopy","success")

                }

                const SpaceRemove=()=>{
                  let newText=text.split(/[ ]+/);
                  setText(newText.join(" "))
                  props.showAlert("SpaceRemove is ok","success")
                }

                const allClear=()=>{
                  let newText =" ";
                  setText(newText)
                  props.showAlert("All clear the text","success")
                }
                        

        const handleOneChange=(event)=>{
              setText(event.target.value)
        }

        
        const [text,setText] =useState('')
  return (
      
    <div>
          <h1  style={{color: props.mode==='dark'?'white':'black'}}>{props.headding}</h1>
          <div className="mb-3" > 
            <textarea className="form-control" value={text} onChange={handleOneChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpclick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={handlelowerclick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2 " onClick={handlecopy}>copyText</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={SpaceRemove}>Extra Space remove</button>
            <button disabled={text.length===0} className="btn btn-primary m-3" onClick={allClear}>AllClear</button>



            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summery</h1>   
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characteras</p>
                <p>{0.08*text.split("").length} Minutes read</p>
                <h1>Preview</h1>
                <p>{text}</p>


            </div> 
    </div>

    
  )
}