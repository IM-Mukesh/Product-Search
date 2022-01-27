import React from 'react';
import { useEffect,useState } from 'react';
import './Main.css'
import Products from './Products';

const ProductSearch = () => {
  const [pdata,setData]=useState([])
  const [query,setQuery]=useState('')
  const [searchQuery,setsearchQuery]=useState('')
  const [isLoading,setisloading]=useState(true)

  function onchangehandler(e){
    setQuery(e.target.value)
  }

  function submithandler(e){
    e.preventDefault()
    setsearchQuery(query)
  }
  
  useEffect(async ()=>{
    var data = await fetch("http://localhost:5000/products")
    data = await data.json()
    // console.log(data)
    setData(data)
    setisloading(false)
  },[])

  return <div>
      <div className="product-container">
        <input type="text"  onChange={(e)=>{onchangehandler(e)}}placeholder='Look for something..'/>
        <button onClick={(e)=>submithandler(e)}>Search</button>
      </div>
      {!isLoading&&<Products searchQuery={searchQuery} pdata={pdata}></Products>}
  </div>;
};

export default ProductSearch;