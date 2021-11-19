import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';

import cart_reducer, {initialState} from '../reducers/CartReducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  PLUS_MINUS_CART,
  REMOVE_ITEM,
} from '../utils/action';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState);

  const addToCart = (id, mainColor, amount, products) => {
    dispatch({type: ADD_TO_CART, payload: {id, mainColor, amount, products}});
  };

  const clearCart = () => {
    dispatch({type: CLEAR_CART});
  };

  const plusMinusCart = (itemId, type) => {
    dispatch({type: PLUS_MINUS_CART, payload: {itemId, type}});
  };

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: id});
  };

  const calculatedItem = () => {
    dispatch({type: COUNT_CART_TOTALS});
  };

  useEffect(() => {
    calculatedItem();
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{...state, addToCart, clearCart, plusMinusCart, removeItem}}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
