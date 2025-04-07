
import { createContext, useState } from 'react'


 export const conContext = createContext(null);
 import React from 'react'
 
 const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
   return (
    <conContext.Provider value={{count, setCount}}>
        {props.children}
    </conContext.Provider>
   )
 }
 
 export default CounterProvider
 
 