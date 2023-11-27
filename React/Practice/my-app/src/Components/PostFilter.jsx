import React from 'react'
import MySelect from './UI/MySelect/MySelect'
import MyInput from './UI/MyInput/MyInput'


const PostFilter = function ({filter,setFilter}){
    return(
        <div>
        <MyInput
        value={filter.query}
        onChange={event => setFilter({...filter,query: event.target.value})}
        placeholder='search...'/>

        <MySelect 
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultValue='sorting'
        options={[
          {value: 'title', name: 'by name'},
          {value: 'body', name: 'by content'}
        ]}></MySelect>
        </div>
    )
    
}
export default PostFilter