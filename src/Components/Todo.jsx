import React,{useState} from 'react'

const Todo = () => {

    
    const [add , setAdd] =useState('');
    const [data , setData]= useState([])
    const handleChange=(e)=>{
        setAdd(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newData=add;
        setData([...data,newData])
        setAdd('')  
    }
    console.log(data)
   
  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="add something" value={add} onChange={handleChange}/>          
            <button type='submit'> add</button>
        </form>  

        {data.map((el)=><h1>{el}</h1>)}        
      
    </div>
  )
}

export default Todo
