import './App.css';
import Alert1 from './components/Alert1';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[darkmode,setdarkmode]=useState('light')
  const[sign,setsign]=useState('Enable Dark Mode')
  const[modestyle,setmodestyle]=useState({
    color:'black',
    backgroundColor:'white'
  })
  const[alert,setalert]=useState(null)
  const showalert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);

  }
  const darkclick = ()=>{
    console.log('black sheep')
    if (darkmode==='light') {
      setdarkmode('dark')
      setmodestyle({
        color:'white',
        backgroundColor: 'rgba(23,27,32)'
      })
      setsign('Enable Light Mode')
      document.body.style.backgroundColor='rgba(23,27,32)'
      showalert("Dark Mode is activated ","success")
      document.title="TextUtils - DarkMode"
    }
    else{
      setdarkmode('light')
      setmodestyle({
        color:'rgba(23,27,32)',
        backgroundColor:'white'
      })
      setsign('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showalert("Light Mode is activated ","success")
      document.title="TextUtils - LightMode"
    }
  }
  return (
    <>
    <HashRouter> 
    <Navbar title="TextUtils" home="Home" about="About" mode={darkmode} togglemode={darkclick} modetext={sign}  />
    {/* <Navbar/> */}
    <Alert1 msg={alert}/>
      <Routes>
          <Route path="/about" element={<About mystyle={modestyle}/>}/>
          <Route  exact path="/" element={<TextForm head="Enter the Text to Analyze" mystyle={modestyle}/>}/>
      </Routes>
      </HashRouter> 
    </>
  );
}

export default App;

