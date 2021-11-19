import React from 'react';
import styled from 'styled-components';
import {
  PageHero,
  ProductsFillter,
  ProductsList,
  ProductsSort,
} from '../components';

const Products = () => {
  return (
    <>
      <PageHero />
      <Wrapper>
        <div className="section-center products">
          <ProductsFillter />
          <div>
            <ProductsSort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default Products;
