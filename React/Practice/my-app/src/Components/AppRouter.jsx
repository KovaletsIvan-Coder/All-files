import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Posts from '../MainPages/Posts';
import { PrivateRoutes, PublicRoutes } from '../router/routes';
import Login from '../MainPages/Login';
import { AuthContext } from '../context';

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth);
  return (
    isAuth
    ?<Routes>
      <Route path='/login' element={<Login/>}/>
      {PrivateRoutes.map(route =>
        <Route key={route.path} path={route.path} element={<route.component/>}></Route>)}
      <Route path='*' element={<Posts/>}/>
    </Routes>

    :<Routes>
    {PublicRoutes.map(route =>
      <Route key={route.path} path={route.path} element={<route.component/>}></Route>)}
    <Route path='*' element={<Login/>}/>
  </Routes>
    
  )
}

export default AppRouter
