import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {navLinks} from '../utils/helpers';

const Navbar = () => {
  return (
    <Wrapper className="nav-center">
      <div className="nav-title">
        <Link to="/">
          <img src="assets/logo.svg" alt="logo" className="nav-logo" />
        </Link>
        <div className="nav-toggle">
          <i className="fas fa-bars"></i>
        </div>
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
  /* background: #f5f5f5; */
  font-size: 1rem;
  padding: 0.5rem 0;

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

  .nav-toggle {
    transition: all 0.3s linear;
    cursor: pointer;
    display: none;
  }
  .nav-toggle:hover {
    color: #ab7b60;
    transform: scale(1.1);
  }
  @media screen and (max-width: 991px) {
    .nav-title {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
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
