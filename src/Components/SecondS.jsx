import React from 'react'

const SecondS = () => {
    // function Counter() {
        let n =0;
        
    
        function increment(){
          n = n + 1;
          console.log(n)
        }

        function decrement(){
            if(n>0){
            n = n - 1;
            console.log(n)
          }
        }
  return (
    <div>
      <span>{n}</span>
        <button onClick={increment}>Increment </button>
        <button onClick={decrement}>decrement </button>
    </div>
  )
}

export default SecondS
