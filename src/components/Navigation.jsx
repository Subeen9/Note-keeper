import React from 'react'
import MakeNote from '../MakeNote'
import {Link} from "react-router-dom";
function Navigation() {
  return (
    <>
    <div className='header'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link className="navbar-brand" to="/home">My Notes</Link>
        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Write Notes</Link>
        </li>
          </ul>
          <form className="d-flex ms-auto order-5" role="search">
      <input className="form-control me-2" type="search" placeholder="Search Notes" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </nav>
    </div>
    </>
  )
}

export default Navigation