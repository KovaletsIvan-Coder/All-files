import React,{useState} from 'react'
import './App.css';
import Logo from './Components/Logo'
import HeaderInfo from './Components/HeaderInfo'
import Brands from './Components/Brands'
import BikeList from './Components/BikeList';

function App() {
  // const [number1,setNumber] = useState(0)
    
  return (
    <div>
      <header>
        <Logo/>
        <HeaderInfo />
        </header>
        <Brands/>
        <main>
          <div>
          <BikeList></BikeList>
          </div>
          
        </main>
    </div>
  );
}

export default App;
