import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
const NavBar = (props) => {
  return (
    <div class="topnav">
  <a class="active" href="/home">Home</a>
  <a href='/task'>Register</a>
  <a href='/about'>Product</a>
  <a href='/contact'>Contact</a>
  
  

</div>

  )
}

export default NavBar
