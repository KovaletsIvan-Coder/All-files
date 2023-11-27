import React from 'react'
import classes from './MyInput.module.css'


const MyInput = function (props){
    return(
    <div>
        <input {...props} className={classes.inputcreate} type="text" />
    </div>
    )
    
}
export default MyInput