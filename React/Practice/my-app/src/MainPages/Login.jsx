import React, { useContext } from 'react'
import MyInput from '../Components/UI/MyInput/MyInput'
import MyButton from '../Components/UI/MyButton/MyButton'
import { AuthContext } from '../context'

const Login = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const Login = event =>{
    setIsAuth(true)
  }

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={Login}>
      <MyInput type='text' placeholder='phone number'></MyInput>
      <MyInput type="password" placeholder='password'></MyInput>
      <MyButton>Enter</MyButton></form>
      
    </div>
  )
}

export default Login
