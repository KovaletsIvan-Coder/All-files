import React,{useState} from 'react'

const Input = function (){
    const [value,setValue] = useState('')
    return(
        <div>
           <div  className='userName'>{value}</div> 
        <input 
        type="text" 
        value={value}
        placeholder='name:'
        onChange={event => setValue(event.target.value)}/> 
        </div>
        
    )
}
export default Input;