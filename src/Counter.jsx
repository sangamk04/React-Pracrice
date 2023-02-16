import React,{useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const incr=() =>{
    setCount(count+1)
    };

    const decr=()=>{
      if(count>0){
      setCount(count-1)
      }
    }

  return (
  <div>
  <button onClick={incr}>Increment</button>
  <p>{count}</p>
  <button onClick={decr}>Decrement</button>
  </div>
  )
}

export default Counter;




