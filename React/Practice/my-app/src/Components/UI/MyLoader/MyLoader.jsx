import React from 'react'
import cl from './MyLoader.module.css'

const MyLoader = () => {
  return (
    <div className={cl.loader_container}>
     <div className={cl.loader}></div>
    </div>
  )
}

export default MyLoader
