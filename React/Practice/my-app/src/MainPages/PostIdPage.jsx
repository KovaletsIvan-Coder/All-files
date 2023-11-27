import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../Components/UI/MyLoader/MyLoader'


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById,IsLoading,error] = useFetching(async (id)=>{
        const responce = await PostService.getById(id)
        setPost(responce.data)
    })
    const [fetchComments,IsComLoading,ComError] = useFetching(async (id)=>{
        const responce = await PostService.getPostCommentsById(id)
        setComments(responce.data)
        
    })
    

    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])

  return (
    <div>
      <h1>Post {params.id}</h1>
      {IsLoading
      ?<Loader/>
      :<div><h4>{post.id}. {post.title}</h4>
      {post.body}</div>
      }

      
      <h4>Comments:</h4>
      {IsComLoading
      ?<Loader/>
      :<div>
        {comments.map(comm =>
            <div>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>)}
        </div>
      }

      
    </div>
  )
}

export default PostIdPage
