import React from 'react'
import {useState} from 'react';

const Hover4 = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
        
      setIsHovering(false);
  };
  return (
    <div>
       <div style={{display:"flex", gap:"50px"}}>
       <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9292/9292628.png'></img></div>
        {isHovering && <h2>S</h2>}
      </div>
      </div>

    </div>
  )
}

export default Hover4

