import React from 'react'
import notes from "./file"
import Note from "./Note"


function Home() {
  return (
<>
{notes.map((values) =>{
    return(
    <Note
    key = {values.key}
    title = {values.title}
    component = {values.content}
    />
    )
})}
</>
  )
}

export default Home