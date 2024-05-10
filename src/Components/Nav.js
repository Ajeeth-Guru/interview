import React from 'react'
import{NavLink}from'react-router-dom'
export default function Nav() {
  return (
    <nav className='nav-item'> 
    <NavLink to='/'>HOME</NavLink>
    <NavLink to='/about'>ABOUT</NavLink>
    <NavLink to='/sign'>SIGN IN</NavLink>
    </nav>
       
   
  )
}
