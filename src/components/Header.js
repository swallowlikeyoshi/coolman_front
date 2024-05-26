import React from 'react';
import { Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Nav className="navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavbarBrand >
            <Link to='/' style={{ textDecoration: "none", color: '#000'}}>
              <h1>'왜요'가 없으면 아무것도 못하나요?</h1>
            </Link>
          </NavbarBrand>

        </div>
      </Nav>
    </header>
  );
};

export default Header;