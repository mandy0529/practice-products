import React from 'react';
import styled from 'styled-components';
import {FaPlus, FaMinus} from 'react-icons/fa';

const AmountButton = ({amount, handleMinus, handlePlus}) => {
  return (
    <Wrapper>
      <button onClick={handleMinus}>
        <FaMinus />
      </button>
      <h2>{amount}</h2>
      <button onClick={handlePlus}>
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
  h2 {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 2rem;
    margin: 0 1rem;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButton;
