import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import cl from './Posts.module.css'

const Posts = (props) => {
    const [number,setNumber] = useState(1)
    const router = useNavigate()
    

    const addNumber2 = ()=>{
        setNumber(number)
        const NewNumber = number; 
        props.add(NewNumber);

    }
  return (
    <div>
        <div className={cl.bike_icon} onClick={()=> router(`/posts/${props.post.id}`)}>            
            <img 
            className={cl.bike_img} 
            src={props.post.src} 
            alt={props.post.alt} />

            <div className={cl.bike_information}>

                <div>{props.post.name}</div>
                <div>Price: {props.post.price}$</div>

                <select className={cl.selector} >
                    <option disabled >Wheels:</option>
                    <option>26</option>
                    <option>27,5</option>
                    <option>29</option>
                </select>

                <button onClick={addNumber2} className={cl.buy_button}>Add To Basket</button>
            </div>
        </div>
    </div>
  )
}

export default Posts
