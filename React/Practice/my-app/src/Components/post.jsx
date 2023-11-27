import React from 'react'
import MyButton from './UI/MyButton/MyButton'
import { useNavigate } from 'react-router-dom'


const MyPosts = function (props){
    const router = useNavigate()
    return(
    <div className='posts-container'>

        <div className='post-content'>
            <strong>{props.post.id}.{props.post.title}</strong>
            <div>
                <span>{props.post.body}</span>

            </div>
        </div>
            <MyButton onClick={() => router('/posts/'+ props.post.id)} className='btn-green'>Open</MyButton>
            <MyButton onClick={() => props.remove(props.post)} className='btn-green'>Delete</MyButton>

    </div>
    )
    
}
export default MyPosts