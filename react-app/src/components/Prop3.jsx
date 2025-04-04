import React from 'react'
import Prop4 from './prop4'
import { useState } from 'react'

function Prop3({item}) {
  let [activeItem, setActiveItem] = useState([])
  let onbuybtn =  (item, event) => {
    let newItem =[...activeItem, item]
    setActiveItem(newItem)

  }
   
  return (
    <>
    <ul className='list-group list-group-flush'>
        {item.map((item) =>(
            <Prop4 key={item} 
            buybtn={true}
            
            Shopitem={item}
            handleBuyBtn={(event) => onbuybtn(item, event)}/>
            
        ))}
    </ul>

    </>
  )
}

export default Prop3
