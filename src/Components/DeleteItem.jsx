import React from 'react'

const DeleteItem = (props) => {
  return (
        
    // <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",margin:"auto", marginTop:"20px",width:"200px",border:"1px solid blue",background:"brown",}}>
    
    <div>
        <div>
            <p style={{color:"yellowgreen"}} >{props.add}</p>

        </div>
        {/* <button style={{height:"30px",color:"white",background:"red"}}onClick={()=>{props.onSelect(props.id)}}>X</button> */}

        <button onClick={()=>{props.onSelect(props.id)}}>delte</button>
    </div>
  )
}


export default DeleteItem;
