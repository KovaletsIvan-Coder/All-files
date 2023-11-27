import React,{useState} from 'react'
import MyInput from './UI/MyInput/MyInput'
import MyButton from './UI/MyButton/MyButton'


const PostForm = function ({create}){
    const [post,setPost] = useState({title: '', body: ''})

    const addPost = (event) =>{
        event.preventDefault()

        const newPost={
            ...post,id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      
    
      }
    return(
        <form>
           <MyInput
      value={post.title} 
      placeholder='post title'
      onChange={event => setPost({...post,title:event.target.value})}/>

      <MyInput 
      value={post.body}
      placeholder='post content'
      onChange={event => setPost({...post,body:event.target.value})}/>

      <MyButton onClick={addPost}>Add Post</MyButton>
        </form>
    )
    
}
export default PostForm