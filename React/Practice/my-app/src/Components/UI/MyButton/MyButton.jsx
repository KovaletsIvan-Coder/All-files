import React from 'react'
import classes from './MyButton.module.css'


const MyButton = function (props){
    return(
        <button {...props} className={classes.buttoncreate}></button>
    )
    
}
export default MyButton