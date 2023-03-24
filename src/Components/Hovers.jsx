import React from 'react'
import {useState} from 'react';
import Hover2 from './Hover2';
import Hover3 from './Hover3';
import Hover4 from './Hover4';
import Hover5 from './Hover5';

const Hovers = () => {
    const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
            
  const handleMouseOut = () => {
    setIsHovering(false);
};
  return (
    <div style={{display:"flex", gap:"50px"}}>
       <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9292/9292628.png'></img></div>
        {isHovering && <h2>A</h2>}
      </div>

      <Hover2/>
      <Hover3/>
      <Hover4/>
      <Hover5/>
      

      {/* <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9288/9288164.png'></img></div>
        {isHovering && <h2>y</h2>}
      </div>

      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9292/9292621.png'></img></div>
        {isHovering && <h2>U</h2>}
      </div>

      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9292/9292623.png'></img></div>
        {isHovering && <h2>S</h2>}
      </div>

      <div>
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src='https://cdn-icons-png.flaticon.com/128/9292/9292624.png'></img></div>
        {isHovering && <h2>H</h2>}
      </div> */}
    </div>
  )
}

export default Hovers
