import React from 'react'
import MakeNote from '../MakeNote'
import {Link} from "react-router-dom";
function Navigation() {
  return (
    <>
    <div className='header'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <Link class="navbar-brand" to="/home">My Notes</Link>
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/create">Write Notes</Link>
        </li>
          </ul>
          <form class="d-flex ms-auto order-5" role="search">
      <input class="form-control me-2" type="search" placeholder="Search Notes" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </nav>
    </div>
    </>
  )
}

export default Navigation