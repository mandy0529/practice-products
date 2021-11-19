import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AppProvider from './contexts/AppContext';
import FilterProvider from './contexts/FilterContext';
import CartProvider from './contexts/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <CartProvider>
        <FilterProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FilterProvider>
      </CartProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
