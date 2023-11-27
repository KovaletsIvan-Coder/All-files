import React from 'react'
import {Route,Routes, Navigate} from 'react-router-dom'
import About from '../pages/About';
import Posts from '../pages/Posts';
import Eror from '../pages/Eror';
import PostPage from '../pages/PostPage';

const AppRouter = () => {
  return (
    <Routes>
    <Route path='/about' element={<About/>}></Route>
    <Route exact path='/posts' element={<Posts/>}></Route>
    <Route exact path='/posts/:id' element={PostPage}></Route>
    <Route path="/eror" element={<Eror/>}></Route>
    <Route path='/*' element={<Navigate to={"/eror"}></Navigate>}></Route>
    {/* якщо ми в пошуковій стрічці введемо неіснуючий маршрут, нас переведе на сторінку з постами */}
    </Routes>
  )
}

export default AppRouter
