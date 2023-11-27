import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import NavBar from './Components/UI/NavBar/NavBar';
import About from './pages/About';
import Posts from './pages/About';
import Eror from './pages/Eror';
import AppRouter from './Components/AppRouter';
function App() {

  return(
    <BrowserRouter>

    <NavBar></NavBar>
    <AppRouter/>
    
    </BrowserRouter>
  )
}

export default App;
