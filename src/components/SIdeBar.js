import React from 'react';
import {FaBars} from 'react-icons/fa';
import {MdOutlineClose} from 'react-icons/md';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useGlobalContext} from '../contexts/AppContext';
import {navLinks} from '../utils/helpers';

const SideBar = () => {
  const {hideSidebar, onSidebar} = useGlobalContext();
  return (
    <Wrapper className={`${onSidebar ? 'active' : ''}`}>
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">
            <img src="assets/logo.svg" alt="logo" className="nav-logo" />
          </Link>
        </div>
        <div className="nav-toggle">
          <MdOutlineClose onClick={hideSidebar} />
        </div>
      </div>

      <ul className="nav-links">
        {navLinks.map((item) => {
          const {id, path, title} = item;

          return (
            <Link className="nav-link" key={id} onClick={hideSidebar} to={path}>
              {title}
            </Link>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background: #fafbfc;
  width: 100%;
  height: 100vh;
  display: none;
  margin-top: 1rem;

  &.active {
    display: none;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 5rem;
  }
  .nav-logo {
    width: 150px;
  }

  .nav-link {
    font-size: 2rem;
    padding: 1.3rem 3rem;
    margin: 2rem 0;
    display: block;
    transition: all 0.3s ease-in-out;
  }
  .nav-link:hover {
    background: #ab7b60;
    padding-left: 2rem;
  }

  .nav-toggle {
    display: block;
    font-size: 2rem;
    transition: all 0.3s linear;
  }
  .nav-toggle:hover {
    color: #ab7b60;
    transform: scale(1.1);
  }
  @media screen and (max-width: 991px) {
    &.active {
      display: block;
    }
  }
`;
export default SideBar;
