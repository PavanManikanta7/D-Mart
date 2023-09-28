import { createContext, useContext, useState } from "react";
const CartContext=createContext();

export const CartProvider=({children})=>{
    const[cartItems,setCartItems]=useState([])

    const addToCart=(item)=>{
    setCartItems([...cartItems,{...item,count:1}])
}
const removeFromCart=(item)=>{
    setCartItems(cartItems.filter((apple)=>apple!==item))
}
return(
    <CartContext.Provider value={{cartItems,setCartItems,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}
export const useCart=()=>{
    return useContext(CartContext)
}