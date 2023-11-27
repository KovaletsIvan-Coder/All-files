import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom"
import Header from './Component/Header/Header';
import Brands from './Component/Brands/Brands';
import AppRouter from './Component/AppRouter/AppRouter';



function App() {
  return (
    <BrowserRouter>
    
    <Header/>
    <Brands/>
    
    <AppRouter/>

    </BrowserRouter>
  );
}

export default App;
