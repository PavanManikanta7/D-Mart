import React, { useState } from 'react';
import { useCart } from './context/CartContext';

const UserCart = () => {
    const {cartItems, setCartItems,removeFromCart}=useCart()
    console.log(cartItems);
    function getTotal(){
      return   cartItems.reduce((t,p)=>{
        return t+(p.price*p.count)
        },0)
    }
    function incCount(item){
      var temp=cartItems.map((cp)=>{
      if(cp.title===item.title)
      {
        return {...cp,count:item.count+1}
        }
        return cp;
    }
      )
      setCartItems([...temp]);
  }
  function decCount(item){
    var temp=cartItems.map((cp)=>{
    if(cp.title===item.title)
    {
      if(item.count>1){
      return {...cp,count:item.count-1}
      }
    }
      return cp;
  }
    )
    setCartItems([...temp]);
}
  return (
    <>
    <div>
       {cartItems.length ===0 ?
       (<p className='empty'>Your Cart is Empty</p>):
       <div>
        {cartItems.map((item)=>{
                return(
                    <div className='CartProducts'>
                        <div>
                        <img src={item.image} alt="" style={{height:"150px"}}/>
                        </div>
                        <div>
                            {item.title}
                            <br/>
                            {item.price}
                            <br/>
                            <button onClick={()=>decCount(item)}>-</button>{item.count}
                            <button onClick={()=>incCount(item)}>+</button><br/>
                            {item.count*item.price}<br/>
                            <button className='removeBtn' onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                    </div>
                )
              })
            }
        </div>
      }
    </div>
      <div>Total:{getTotal()}</div>
    </>
  )
}

export default UserCart