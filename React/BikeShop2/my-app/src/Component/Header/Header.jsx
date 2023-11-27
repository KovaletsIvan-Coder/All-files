import React from 'react'
import cl from './Header.module.css'
import NavBar from '../Navbar/NavBar'

const Header = () => {
  return (
    <header className={cl.header}>
      <div className='logo'>Bike Shop</div>
      <NavBar></NavBar>
    </header>
  )
}

export default Header
