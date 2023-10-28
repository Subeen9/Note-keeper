import React from "react";
import Header from './Header'
import Footer  from "./Footer";
import Note from "./Note";
import notes from "./file";

function App(){
return(
    <>
    <div>
    <Header/>
  {notes.map((values)=>{
    return(
    <Note
    key = {values.key}
    title = {values.title}
    component = {values.content}
    />
    )
  })}
    <Footer/> 
    </div>
    </>
)
}
export default App;