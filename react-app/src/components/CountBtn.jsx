import React, { useContext } from 'react'
import {MdAdd} from 'react-icons/md'
import {FaMinus} from 'react-icons/fa'
import CountContext from './Counter.jsx'
function CountBtn() {
  // const {count, setCount} = useContext(CountContext);
  return (
    <>
    <button onClick={()=> CountContext.setCount(CountContext.count +1)}><MdAdd
    /></button>
    <button onClick={()=> CountContext.setCount(CountContext.count -1)}><FaMinus/></button>
    </>
  )
}

export default CountBtn
