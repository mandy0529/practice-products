import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaCheck} from 'react-icons/fa';
import AmountButton from './AmountButton';
import {useCartContext} from '../../contexts/CartContext';

const AddToCart = ({products}) => {
  const {id, stock, colors} = products;
  const {addToCart} = useCartContext();
  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handlePlus = () => {
    setAmount((current) => {
      if (current === stock) {
        return current;
      }
      return current + 1;
    });
  };

  const handleMinus = () => {
    setAmount((current) => {
      if (current === 1) {
        return current;
      }
      return current - 1;
    });
  };

  return (
    <Wrapper>
      <div className="colors">
        <span>colors :</span>
        <div>
          {colors.map((item, index) => {
            return (
              <button
                className={`${
                  mainColor === item ? 'color-btn active' : 'color-btn'
                }`}
                key={index}
                style={{backgroundColor: `${item}`}}
                onClick={() => setMainColor(item)}
              >
                {mainColor === item ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButton
          amount={amount}
          handlePlus={handlePlus}
          handleMinus={handleMinus}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, mainColor, amount, products)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin: 1rem;
  }

  .btn {
    margin-top: 5rem;
    width: 140px;
  }
`;
export default AddToCart;
