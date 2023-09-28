import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCart } from '../context/CartContext';

const Electronicsingle = () => {
  const {id}=useParams();
  console.log(id);
  const [item,Setitem]=useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        Setitem(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const {addToCart,cartItems}=useCart()
  return (
    <div className='Singlepage'>
        <div>
            <img src={item?.image} style={{height:"600px"}} alt="no image"/>
        </div>
        <div className='Singlecontent'>
         <h1>{item.title}</h1>
         <h2 style={{marginTop:"50px"}}>{item.description}</h2><br/>
         {/* <h3>{item.rating.rate}&#9733;&nbsp;&nbsp;{item.rating.count}ratings</h3> */}
         <h1 style={{marginTop:"30px",backgroundColor:"lightgreen",padding:"10px"}}><span style={{fontSize:"20px"}}>Special price</span><br/>
          <span style={{color:"green"}}>20% off</span>&nbsp;<span style={{color:"grey"}}><del>{item.price+item.price*0.20}</del></span>&nbsp;
          ₹{item.price}</h1>
          <br/>
          <button onClick={()=>addToCart(item)}style={{backgroundColor:"red",height:"40px",padding:"10px"}}>Add to Cart</button>
        </div>

    </div>
  )
}

export default Electronicsingle;