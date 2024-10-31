import { FC } from 'react';
import { Navbar as NavbarComp } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
    return (
      <NavbarComp className="logo-container border-bottom border-secondary border-2" style={{ backgroundColor: "#fed305" }} sticky='top'>
          <NavbarComp.Brand className="d-flex align-items-center ms-3">
            <Link to="/duties">
              <img
                src="/src/logo.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
            </Link>
          </NavbarComp.Brand>
      </NavbarComp>
    );
  };