import React from 'react'

const InputText = ({ handleKeyDown }) => { // Accept handleKeyDown as a prop
  return (
    <>
      <input 
        type="text" 
        placeholder='Search items....' 
        onKeyDown={handleKeyDown} // Use the passed prop here
      />
    </>
  )
}

export default InputText
