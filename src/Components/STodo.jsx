import React,{useState} from 'react'

const STodo = () => {

    const [inp,setInp]=useState('')
    const [val,setVal]=useState([])
    const handleChange=()=>{
        setVal([...val,inp])
    }
    console.log(val)
  return (
    <div>
        <input type="text" onChange={(e)=>setInp (e.target.value)} value={inp} />
        <button onClick={handleChange}>Add</button>

        { val ?. map((el)=><h1>{el}</h1>)}
      
    </div>
  )
}

export default STodo
