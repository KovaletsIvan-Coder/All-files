import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
      <div className='navBarLinks'>
        <Link className='Link' to='/about'>About Site</Link>
        <Link className='Link' to='/posts'>Posts</Link>
      </div>
    </div>
  )
}

export default NavBar
