import React,{useEffect, useState} from 'react'
import PostList from '../Components/PostList'
import PostForm from '../Components/PostForm'
import PostFilter from '../Components/PostFilter'
import MyModal from '../Components/UI/MyModal/MyModal'
import MyButton from '../Components/UI/MyButton/MyButton'
import { usePosts } from '../hooks/usePost'
import PostService from '../API/PostService'
import MyLoader from '../Components/UI/MyLoader/MyLoader'
import { useFetching } from '../hooks/useFetching'
import { getPagesCount } from '../utils/pages'
import Pagination from '../Components/UI/Pagination/Pagination'



const Posts = function() {
  const [posts,setPosts] = useState([])
  const [filter,setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  const [limit,setLimit] = useState(10)
  const [page, setPage] = useState(1)  
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query)
  

  const [fetchPosts, isPostLoading, postError] = useFetching (async (limit, page)=>{
  const responce = await PostService.getAll(limit, page)
  setPosts(responce.data);
  const totalCount = responce.headers['x-total-count']
  setTotalPage(getPagesCount(totalCount,limit))
  })

  useEffect(()=>{
    fetchPosts(limit, page)
  },[])  
  
  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)

  } 

  const deletePost = (post) =>{
    setPosts(posts.filter(p => p.id !== post.id))
         
  }

  const changePage = (page)=>{
    setPage(page)
    fetchPosts(limit,page)
  }

  return(
    <div>
      <MyButton style={{marginTop: 20}} onClick={() => setModal(true)}>
        Create Post
      </MyButton>
      
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: "15px 0px"}}></hr>

      <PostFilter filter={filter} setFilter={setFilter}/>
    {postError&& 
    <h1>Відбулась помилка ${postError}</h1>}
    {isPostLoading
    ?<MyLoader></MyLoader>
    :<PostList remove={deletePost} posts ={sortedAndSearchedPost} title ='Post1'/>
    }
    <Pagination
    totalPage={totalPage}
    page={page}
    changePage={changePage}/>

    </div>
  )
}
export default Posts;