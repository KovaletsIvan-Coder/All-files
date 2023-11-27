import React from 'react'
import {getPagesArray} from '../../../utils/pages'

const Pagination = ({totalPage, page, changePage}) => {
   let pagesArray = getPagesArray(totalPage)

  return (
    <div className='page_container'>
      {pagesArray.map( p =>
      <span
      onClick={()=> changePage(p)} 
      className={page === p ? 'page page_curent' : 'page'} 
      key={p}>{p}</span>
      )}
      </div>
  )
}

export default Pagination
