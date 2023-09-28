import React from "react";
import { useState,useEffect } from "react";
const Home=()=>{
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,500px)",gap:"20px"}}>
    {data.map((item) => (
          <li  style={{ border:'1px solid black', padding: '10px', margin: '10px',width:"500px",listStyleType:"none",borderRadius:"5px"}} key={item.id}> 
          <img src={item.image} alt={item.title} style={{height:"200px"}} /><br/>
          <h2>{item.title}</h2><br/>
          <h3>₹{item.price}</h3><br/>
          </li>
    ))}
    </div>
    </>
  )
}
export default Home;