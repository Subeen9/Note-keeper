import React from 'react'


var time = new Date();
var year = time.getFullYear();

export default function Footer() {
  return (
    <footer className= "footer">
        <p> Subin {year}</p>
    </footer>
  )
}
