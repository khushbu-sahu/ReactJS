import React, { useState } from 'react'
import { useRef } from 'react'
function UseRefHook() {
    const refObject = useRef();
    console.log(refObject);
    const [Name, setName] = useState("");
    function Reset() {
        setName("");
        refObject.current.focus();
    }

    function Default(){
        refObject.current.value = "khushi";
        refObject.current.focus();


    }

    return (
        <>
            <input ref={refObject} type="text" value={Name} onChange={(e) => setName(e.target.value)} />
            <button onClick={Reset}>Reset</button>
            <button onClick={Default}>Default</button>
        </>
    )
}

export default UseRefHook
