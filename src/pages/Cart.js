import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import {useCartContext} from '../contexts/CartContext';
import {PageHero} from '../components';
import CartContent from '../components/cart/CartContent';

const Cart = () => {
  const {cart} = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100">
        <div className="empty">
          <h2>your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <main>
      <PageHero />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  .btn {
    padding: 0.5rem;
    background: gold;
    border-radius: 5px;
  }
`;

export default Cart;
