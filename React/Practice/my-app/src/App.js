import React, { useState } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/UI/NavBar/NavBar';
import AppRouter from './Components/AppRouter';
import { AuthContext } from './context';

const App = function() {
  const [isAuth, setIsAuth] = useState(false)
  return(
    <AuthContext.Provider value={{isAuth:isAuth, setIsAuth:setIsAuth}}>
     <BrowserRouter>
      <NavBar/>
      <AppRouter/>
     </BrowserRouter>
    </AuthContext.Provider>
    
  )
}
export default App;