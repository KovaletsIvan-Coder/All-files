import React, {useState} from 'react'
import MyButton from './UI/MyButton/MyButton'

const Counter = function (){
    const [likes,setLikes] = useState(0)

    function inkrement (){
        setLikes(likes + 1)
    }
    function decrement (){
        setLikes(likes - 1)
    }
    return(
        <div style={{display: 'flex',alignItems:'center'}}>
            <MyButton onClick={inkrement}>Inkrement</MyButton>
            <MyButton onClick={decrement}>Decrement</MyButton>
            <h1>{likes}</h1>

        </div>
    )
}
export default Counter;