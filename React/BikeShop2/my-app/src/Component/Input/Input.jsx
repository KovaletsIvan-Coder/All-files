import React from 'react'
import cl from './Imput.module.css'

const Input = (props) => {
  return (
    <div>
      <input className={cl.search_Input} type='text' placeholder='Search...'{...props}></input>
    </div>
  )
}

export default Input
