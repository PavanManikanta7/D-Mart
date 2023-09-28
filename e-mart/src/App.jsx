import React from 'react'
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Mens from './Categories/mens';
import Womens from './Categories/Womens';
import Jewellary from './Categories/Jewellary';
import Electronics from './Categories/Electronics';
import Mensingle from './Singles/Mensingle';
import Womensingle from './Singles/Womensingle';
import Jewellarysingle from './Singles/Jewellarysingle';
import Electronicsingle from './Singles/Electronicsingle';
import UserCart from './UserCart';
import { Link } from 'react-router-dom';
import { useCart } from "./context/CartContext";

const App = () => {
  const {cartItems}=useCart();
  return (
    <div>
      <div className="HeaderSection">
      <div>
      <h1>D-mart</h1>
      </div>
      <div>
      <input type="text" placeholder="Searching..." style={{height:"40px",width:"400px",borderRadius:"20px"}} />
      </div>
      <div>
        Login/Signup
      </div>
      <Link to='/cart'>
      <div>Cart
        <span>
          {cartItems.length}
        </span>
      </div>
      </Link>
    </div>
    <div className="ProdSection">
    <ul>
      <Link to='/'><li>All Products</li></Link>
      <Link to='/men'>
      <li>Men's Clothing</li>
      </Link>
      <Link to='/women'><li>Female Clothing</li></Link>
      <Link to='/jewellary'><li>Jewellary</li></Link>
      <Link to='/electronics'><li>Electronics</li></Link>
    </ul>
    </div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/men' element={<Mens/>}/>
            <Route path='/women' element={<Womens/>}/>
            <Route path='/jewellary' element={<Jewellary/>}/>
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/mensingle/:id' element={<Mensingle/>}/> 
            <Route path='/womensingle/:id' element={<Womensingle/>}/>
            <Route path='/jewellarysingle/:id' element={<Jewellarysingle/>}/>
            <Route path='/electronicsingle/:id' element={<Electronicsingle/>}/>
            <Route path='/cart' element={<UserCart/>}/>
        </Routes>
    </div>
  )
}

export default App