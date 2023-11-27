import React from 'react'
import cl from './Brands.module.css'
import {Link} from "react-router-dom";

const Brands = () => {
  return (
    <div className={cl.brands_nav_bar}>
      <Link className={cl.brands_link} to='/Trek'>Trek</Link>
      <Link className={cl.brands_link} to='/Specialized'>Specialized</Link>
      <Link className={cl.brands_link} to='/Giant'>Giant</Link>
      <Link className={cl.brands_link} to='/Canyon'>Canyon</Link>
      <Link className={cl.brands_link} to='/Dartmoor'>Dartmoor</Link>
      <Link className={cl.brands_link} to='/YT'>YT</Link>
      <Link className={cl.brands_link} to='/Bergamount'>Bergamount</Link>
    </div>
  )
}

export default Brands
