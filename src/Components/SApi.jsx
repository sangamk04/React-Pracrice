import axios from 'axios'
import React,{useState,useEffect} from 'react'



const SApi = () => {

  const [ data, setData] = useState([])
useEffect(()=>{
  axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=30 ")
  .then((r)=>setData(r.data))
  .catch((err)=>console.log(err))
})
console.log('data',data)

  return (
    <div>
      {data.data ?.map((el)=> <h1></h1>
      
      )}      
    </div>
  )
}

export default SApi
