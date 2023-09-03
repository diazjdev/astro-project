import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter]= useState(0);
    const increment =()=>{
        setCounter(counter + 1)
    }

  return <div className="text-white">{counter}
  <hr />
  <button className="m-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white" onClick={()=> {increment()}}>Increment +</button>
  </div>;
}