import React from 'react';
import {useLocation} from 'react-router';
import styled from 'styled-components';

const PageHero = () => {
  const {pathname} = useLocation();

  return (
    <Wrapper>
      <h3>Home / {pathname.slice(1)}</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #eaded7;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  h3 {
    margin: 0 auto;
    width: 90vw;
    max-width: 1170px;
  }
`;
export default PageHero;
