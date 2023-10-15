import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import { useState } from "react";

function App() {
  const toggle=()=>{
    if(mode==="light"){
      setMode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("dark mode is Enable","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("light mode is Enable","success")

    }
  }
  const showAlert=(message,type)=>{
        setalert({
          msg:message,
          type:type
        })
        setTimeout(() => {
          setalert(null)
        }, 1500);
  }

  const[mode,setMode]=useState("light")
  const[alert,setalert]=useState(null)
  
  return (
    <>
      <Navbar toggle={toggle} mode={mode} text="Textutile" about="aboututile"/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Textbox headding="Text table for convert process" toggle={toggle} mode={mode} showAlert={showAlert} />
      </div>
      <div className="container" mode={mode}>
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
