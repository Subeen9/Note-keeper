import React from "react";
import Footer  from "./Footer";
import Navigation from "./components/Navigation";
import {Routes, Route} from 'react-router-dom';
import MakeNote from "./MakeNote";
import Home from "./Home";
function App(){  
return(
    <>
  
    <Navigation/>
    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route  path ="/create" element = {<MakeNote/>}/>
    </Routes>
   
    
    <Footer/> 
   
    </>
)
}
export default App;