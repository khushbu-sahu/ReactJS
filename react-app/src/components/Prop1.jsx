import React from 'react'

function Prop1({item}) {
    // let Items =["shirt", "pants", "shoes","hat","socks"]
    // let Items =[];
  return (
   <>
   {item.length === 0 && <h4>Shop is Empty</h4>}
   
   </>
  )
}

export default Prop1
