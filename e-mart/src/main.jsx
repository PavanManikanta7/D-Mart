import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <CartProvider>
      <App/>
    </CartProvider>
  </React.StrictMode>,
  </BrowserRouter>
)
