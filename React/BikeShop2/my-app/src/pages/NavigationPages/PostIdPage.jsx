import React from 'react'
import { useParams } from 'react-router-dom'

const PostIdPage = () => {
    const params = useParams()
  return (
    <h1 style={{textAlign:'center'}}>
      Page for bike with id: {params.id}
    </h1>
  )
}

export default PostIdPage
