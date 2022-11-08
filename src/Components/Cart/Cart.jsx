
import { useState } from "react";


export default function Cart() {
    const [item, setItem] = useState(0);
    function decrement(){
        setItem(item - 1);
    }
 

    
    function increment() {
      setItem(item + 1);
    }
  
    return (
      <>
        <button onClick={() => decrement()}>-</button>
        <button onClick={() => {
          increment();

          
        }}>+</button>
        <h1>Item: {item}</h1>
      </>
    )

  }
  