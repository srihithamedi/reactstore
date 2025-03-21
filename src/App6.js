import React, { useState } from 'react'

export default function () {

    const [hobby,setHobby]=useState();
    const[text,setText]=useState();
    const handleSubmit=()=>{
        setHobby([...hobby,text]);
    }
  return (
    <div>
        <input type='text' onChange={(event)=>setText(event.target.value)}></input>
        <button onClick={handleSubmit}>add</button>
        <hr>
        </hr>
        
    </div>
  )
}
