import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {navLinks} from '../utils/helpers';
import {FaBars} from 'react-icons/fa';
import {useGlobalContext} from '../contexts/AppContext';

const Navbar = () => {
  const {showSidebar} = useGlobalContext();

  return (
    <Wrapper>
      <div className="nav-title">
        <Link to="/">
          <img src="assets/logo.svg" alt="logo" className="nav-logo" />
        </Link>
      </div>
      <div className="nav-toggle">
        <FaBars onClick={showSidebar} />
      </div>

      <ul className="nav-links">
        {navLinks.map((item) => {
          const {id, path, title} = item;
          return (
            <li key={id} className="nav-link">
              <Link to={path}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
  font-size: 1rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fafbfc;

  .nav-logo {
    width: 200px;
  }
  .nav-links {
    display: flex;
    align-items: center;
    letter-spacing: 3px;
  }
  .nav-link {
    margin-left: 3rem;
    padding-bottom: 0.5rem;
    transition: all 0.2s linear;
    border-bottom: 3px solid transparent;
    text-transform: uppercase;
  }
  .nav-link:hover {
    border-bottom: 3px solid #ab7b60;
  }
  .nav-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    display: none;
    transition: all 0.3s ease-in;
  }
  .nav-toggle:hover {
    color: #ab7b60;
    transform: scale(1.1);
  }
  @media screen and (max-width: 991px) {
    justify-content: space-between;
    padding: 0.5rem 4rem;
    .nav-links,
    .nav-icons {
      display: none;
    }
    .nav-toggle {
      display: block;
    }
    .nav-logo {
      width: 170px;
    }
  }
`;

export default Navbar;
