import React, {useEffect,useState } from 'react'
import {usePosts} from '../hooks/usePosts'
import {useFetching} from '../hooks/useFetching'
import {getPageCount} from '../utils/pages'
import MyButton from '../Components/UI/MyButton/MyButton'
import MyModal from '../Components/UI/MyModal/MyModal'
import Loader from '../Components/UI/Loader/Loader'
import PostForm from '../Components/PostForm'
import PostFilter from '../Components/PostFilter'
import PostList from '../Components/PostList'
import Pagination from '../Components/UI/Pagination/Pagination'
import Counter from '../Components/Counter'
import Input from '../Components/Input'
import PostService from '../API/PostService'
import '../styles/App.css'


function Posts() {
  //створюємо список постів які будуть на сторінці при запуску
  const [posts1,setPosts] = useState([])
  const [modal,setModal] = useState(false)
  const [filter, setFilter] = useState({sort:'' , query:''})
  const sortedAndSearchedPosts = usePosts(posts1, filter.sort, filter.query)
  const [totalPages,setTotalPages] = useState(0)    //стан в який ми поміщаємо загальну кількість постів
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)



  const [fetchPosts,isPostLoading,postsEror] = useFetching( async(limit,page) =>{
    const response = await PostService.getAll(limit,page)
      setPosts(response.data)
      const totalCount = response.headers["x-total-count"] 
      setTotalPages(getPageCount(totalCount,limit))
  })
  
  
  useEffect(()=>{//для того щоб наші пости одразу прогрузились на сторінці а не після нажаття на кнопку
    fetchPosts(limit,page)
  },[page])

  const createPost = (newPost) =>{
    setPosts([...posts1,newPost])
    setModal(false)}

  const deletePost = (post) =>{
    setPosts(posts1.filter(p => p.id !== post.id))}

    const changePage = (page) =>{
      setPage(page)
      fetchPosts(limit,page)
    }


  return (
    <div className="App">

      <MyButton style={{marginTop: 15}} onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal 
      visible={modal}
      setVisible = {setModal}>
        <PostForm create={createPost}></PostForm>{/*форма для створення постів*/}
      </MyModal>
      
      <hr style={{margin: '15px 0px'}}></hr>
      
      <PostFilter
      filter={filter}
      setFilter={setFilter}>
      </PostFilter>

      {postsEror &&
      <h1>відбулась помилка:${postsEror}</h1>}
      {isPostLoading
      ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader></Loader></div>
      : <PostList remove={deletePost} posts={sortedAndSearchedPosts} title='Post List 1'></PostList>}

      <Pagination
      totalPages={totalPages}
      changePage={changePage}
      page={page}/>

      <Counter/>{/*додавання і віднімання (лайків/товару в корзині)*/}

      <Input/>{/*поле для введення ім'я*/}

    </div>
  );
}

export default Posts;