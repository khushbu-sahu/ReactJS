import React, { useContext, useState } from 'react'
import CountBtn from './CountBtn';
import {conContext} from './Counter';

function ContextApi() {
  const counterState = useContext(conContext);
  console.log(counterState);
  
  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <CountBtn/>
    </div>
  )
}

export default ContextApi
