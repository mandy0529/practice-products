import React from 'react';
import styled from 'styled-components';
import {useGlobalContext} from '../contexts/AppContext';

const Home = () => {
  return (
    <Wrapper className="section">
      <h1 className="section-center">home</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
`;
export default Home;
