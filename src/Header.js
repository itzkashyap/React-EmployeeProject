import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
 
 
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}

        <Link to="/home"className='nav-link'>Home</Link>
       
      </li>
      <li class="nav-item">
      <Link to="/about" className='nav-link'>About</Link>
      </li>
      <li class="nav-item">
      <Link to="/contact" className='nav-link'>Contact</Link>
      </li>
      <li class="nav-item">
      <Link to="/support" className='nav-link'>Support</Link>
      </li>
      <li class="nav-item">
      <Link to="/employee" className='nav-link'>Employee</Link>
      </li>

      <li class="nav-item">
      <Link to="/hello" className='nav-link'>Hello</Link>
      </li>
     
    </ul>
  </div>
</nav></>
  )
}

export default Header