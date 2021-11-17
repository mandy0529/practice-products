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
  height: 10rem;
  display: flex;
  align-items: center;
  padding: 0 10rem;
  font-weight: bold;
  font-size: 2rem;
`;
export default PageHero;
