import React from 'react'
import MyInput from './UI/MyInput/MyInput';
import MySelect from './UI/Select/MySelect';

const PostFilter = ({filter,setFilter}) =>{

    return(
      <div>
        <MyInput
      value={filter.query}
      onChange={event => setFilter({...filter, query: event.target.value})}
      placeholder=' search post...'
      ></MyInput>

      <MySelect 
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
      options={[
        {value: 'title', name:'by name'},
        {value: 'body', name:'by content'}]}>
      </MySelect>
       
      </div>
    )
}
export default PostFilter