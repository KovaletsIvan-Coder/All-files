import React from 'react'

const Bike = (props)=>{
    return(
        <div className='bike'>
            <img className='img-bike' src={props.post.img} alt="TREK Top Fuel 9.7" />
            <div className='bikeInfo-container'>
                <div className='bikeInfo'>
                    <p>{props.post.name}</p>
                    <p>Price: {props.post.price}$</p>
                    {/* <p>Wheels: {props.post.wheels}</p>  */}
                    <form action="">Wheels size:   
                        <select name="" id="">
                        <option value="27.5">27.5</option>
                        <option value="29">29</option>
                    </select>
                    </form>
                    
                </div>
                <div className='addBtn-container'>
                    <button className='addBtn' >Add to basket</button>
                </div>
                    

                </div>
        </div>
    )
    
}
export default Bike