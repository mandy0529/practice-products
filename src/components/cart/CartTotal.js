import React from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import {formatPrice} from '../../utils/helpers';
import {useCartContext} from '../../contexts/CartContext';

const CartTotals = () => {
  const {total_price, total_amount} = useCartContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal price : <span>{formatPrice(total_price)}</span>
          </h5>
          <h5>
            subtotal amount : <span>{total_amount} 개</span>
          </h5>
          <hr />
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
