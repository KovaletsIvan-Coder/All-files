import React from 'react'
import cl from './NavBar.module.css'
import {Link} from "react-router-dom";
const NavBar = () => {
  return (
    <div className={cl.navigation_container}>
    <Link className={cl.navigation_link} to='/mainPage'>Main Page</Link>
    <Link className={cl.navigation_link} to='/shops'>Shops</Link>
    <Link className={cl.navigation_link} to='/contacts'>Contacts</Link>
    <Link className={cl.navigation_link} to='/about'>About us</Link>
    </div>
  )
}

export default NavBar
