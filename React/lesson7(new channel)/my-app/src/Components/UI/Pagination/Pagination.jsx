import React from 'react'
import { getPagesArray } from '../../../utils/pages'
// import './Components/styles/App.css'

const Pagination = ({totalPages,changePage,page}) =>{
    let pagesArray = getPagesArray(totalPages)


    return(
        <div className='page_wrapper'>
        {pagesArray.map((p) =>
        <span 
        onClick={() => changePage(p)}
        className={page === p ? 'page page_curent' : 'page'} 
        key={p}>
        {p}
        </span>)}
        </div>
    )
}
export default Pagination