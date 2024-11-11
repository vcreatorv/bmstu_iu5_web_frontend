import { FC } from 'react';
import { Navbar as NavbarComp } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from "/logo.png"


export const Navbar: FC = () => {
    return (
      <NavbarComp className="logo-container border-bottom border-secondary border-2" style={{ backgroundColor: "#fed305" }} sticky='top'>
          <NavbarComp.Brand className="d-flex align-items-center ms-3 flex-row">
            <Link to="/">
              <img
                src={ logoImage }
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '50px' }}
              />
            </Link>
            <Link to="/provider-duties" className="ms-5 fs-4 text-decoration-none text-dark" style={{ fontWeight: 600 }}>
              Каталог услуг
            </Link> 
          </NavbarComp.Brand>
      </NavbarComp>
    );
  };