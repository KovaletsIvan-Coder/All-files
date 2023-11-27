import React, {useState} from 'react'
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
                  //виконуємо деструктуризацію
const PostForm = ({create}) =>{
    const [post,setPost] = useState({title:'',body:''})

    const addPost = (event) =>{
        event.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      
      }

    return(
        <form>
        <MyInput 
        value={post.title} 
        type='text' 
        placeholder='Post Title'
        onChange={event => setPost({...post,title: event.target.value})}></MyInput>

        <MyInput 
        value={post.body} 
        type='text' 
        placeholder='Post Content'
        onChange={event => setPost({...post, body: event.target.value})}
        ></MyInput>

        <MyButton onClick={addPost}>Add Post</MyButton>
      </form>
    )
}
export default PostForm