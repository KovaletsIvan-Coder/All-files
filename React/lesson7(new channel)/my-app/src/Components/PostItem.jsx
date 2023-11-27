import React from 'react'
import MyButton from './UI/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = (props) =>{
  const router = useNavigate();
  console.log(router)

    return(
      <div className='post'>      

        <div className='post-content'>
          <strong>{props.post.id}.{props.post.title}</strong>
          <div>{props.post.body}</div>
        </div>
        <MyButton onClick={() => router("/posts/{props.id}")}>Open</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>      

      </div>
    )
}
export default PostItem