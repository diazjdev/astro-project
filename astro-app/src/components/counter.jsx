
import { useStore } from '@nanostores/react';
import React, { useState } from "react";
import { getCounter, increaseCounter, counter } from "../store/store";
export default function Counter() {
  const $myCounter = useStore(counter)
    const increment =()=>{
        increaseCounter()
    }

  return <div className="text-white">{$myCounter}
  <hr />
  <button className="m-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 hover:text-white" onClick={()=> {increment()}}>Increment +</button>
  </div>;
}