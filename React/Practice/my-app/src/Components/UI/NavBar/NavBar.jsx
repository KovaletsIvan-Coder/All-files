import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import MyButton from '../MyButton/MyButton'
import { AuthContext } from '../../../context'

const NavBar = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  return (
    <div className='nav_bar'>
      <MyButton
      onClick={()=> setIsAuth(false) }>Go Out</MyButton>
      <div className='nav_bar_links'>
        <Link className='link' to='/about'>About</Link>
        <Link to='/posts'>Posts</Link>
      </div>
    </div>
  )
}

export default NavBar
