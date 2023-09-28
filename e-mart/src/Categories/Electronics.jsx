import React from 'react';
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
const Electronics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        const filterdata=data.filter(function(el)
        {
            return el.category=== "electronics";
        })
        setData(filterdata);
        console.warn(filterdata);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
    {data.map((item) => (
        <li  style={{ border:'1px solid black', padding: '10px', margin: '10px',width:"500px",listStyleType:"none",borderRadius:"5px"}} key={item.id}> 
        <Link to={`/electronicsingle/${item.id}`}><img src={item.image} alt={item.title} style={{height:"200px"}} /></Link><br/>
        <h2>{item.title}</h2><br/>
        <h3>₹{item.price}</h3><br/>
        </li>
  ))}
  </>
  )
}

export default Electronics;