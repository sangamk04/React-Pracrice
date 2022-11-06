import { useEffect, useState } from 'react';

const Practice = () => {
    const [product, setProduct] = useState([])

const getData=()=>{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=30`)
    .then((res)=>res.json())
    .then((data)=>{console.log(data)
    data.data.map((ele)=>{
        // ele.width="100px"
    })
    setProduct(data);
})
}
useEffect(()=>{
    getData()
},[])
  return (
    <div>

       {product.length !== 0  && product.data.map((ele)=>(
        <div style={{ textAlign:"center"}}>
        <img style={{}} src={ele.image}/>
        <h1 style={{fontSize:"15px"}}>{ele.brand}</h1>
        <p>{ele.title}</p>
        <p>{ele.id}</p>

        </div>
    ))}

    </div>
  )
}

export default Practice;
