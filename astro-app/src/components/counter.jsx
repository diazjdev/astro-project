import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter]= useState(0);
    const increment =()=>{
        setCounter(counter + 1)
    }

  return <div className="text-white">{counter}
  <hr />
  <button onClick={()=> {increment()}}>Increment +</button>
  </div>;
}