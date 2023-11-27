import React from 'react'
import Bike from './Bike'



const BikeList = function ( ){
    return(
    <div className='Bike-container'>
          <Bike post={{wheels:'27.5',name:'Trek Top Fuel 9.7',price:"2000",img:'https://www.bicyclechain.co.uk/content/products/trek-top-fuel-9-7_5549034.jpg'}}/>
          <Bike post={{wheels:'29',name:'Sender CFR ',price:"2500",img:'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw6b6b35fa/images/full/full_2022_/2022/full_2022_sender-cfr_3205_bk-sr_P5.png'}}/>
          <Bike post={{wheels:'29',name:'Zascar Lt Expert',price:"2100",img:'https://www.cyclesuk.com/content/products/gt-zaskar-lt-al-expertjpg_8603e705d43afa6601a1c83e68af244a.jpg'}}/>
          <Bike post={{wheels:'27.5',name:'STEREO ONE 55',price:"3000",img:'https://file.cube.eu/azwesc1xfg346/media/4c/0a/65/1675147466/S_0_90109_655400_S_00.jpg'}}/>
          <Bike post={{wheels:'27.5',name:'Dartmoor Primal Pro',price:"1500",img:'https://cdn.mtbdatabase.com/wp-content/uploads/2021/08/02014258/2020-Dartmoor-Primal-Pro-27.5.jpg.webp'}}/>
          <Bike post={{wheels:'29',name:'Giant Stance 1',price:"2700",img:'https://velotime.com.ua/wa-data/public/shop/products/14/60/6014/images/11065/11065.970.jpg'}}/>
    </div>
    )
    
}
export default BikeList