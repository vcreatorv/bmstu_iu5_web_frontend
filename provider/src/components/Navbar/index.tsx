import { FC } from 'react';
import { Navbar as NavbarComp } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from "/logo.png"
import accountImage from "/images/account.png"

export const Navbar: FC = () => {
    return (
      // <NavbarComp className="navbar logo-container border-bottom border-secondary border-2" sticky='top'>
      //     <NavbarComp.Brand className="d-flex align-items-center ms-3 flex-row">
      //       <Link to="/">
      //         <img
      //           src={ logoImage }
      //           alt="Logo"
      //           className="img-fluid rounded-2"
      //           style={{ maxHeight: '50px'}}
      //         />
      //       </Link>
      //       <Link to="/provider-duties" className="p-2 ms-5 fs-4 text-decoration-none text-dark rounded-2" style={{ fontWeight: 600 }}>
      //         Услуги провайдера
      //       </Link> 
      //       <div className="d-flex align-items-center justify-content-end ml-auto">
      //         <Link to="/register" className="ms-5 fs-4 text-decoration-none text-dark" style={{ fontWeight: 600 }}>
      //           Регистрация
      //         </Link>

      //         <Link to="/login" className="ms-5 fs-4 text-decoration-none text-dark" style={{ fontWeight: 600 }}>
      //           Войти
      //         </Link>

      //         <Link to="/user" className="ms-5 fs-4 text-decoration-none text-dark">
      //           <img
      //             src={ accountImage }
      //             alt="User"
      //             className="img-fluid rounded-2"
      //             style={{ maxHeight: '50px'}}
      //           />
      //         </Link>
      //       </div>
      //     </NavbarComp.Brand>
      // </NavbarComp>
      <NavbarComp className="navbar logo-container border-bottom border-secondary border-2" sticky="top">
        <NavbarComp.Brand className="d-flex align-items-center ms-3 flex-row">
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              className="img-fluid rounded-2"
              style={{ maxHeight: '50px' }}
            />
          </Link>
          <Link
            to="/provider-duties"
            className="p-2 ms-5 fs-4 text-decoration-none text-dark rounded-2"
            style={{ fontWeight: 500 }}
          >
            Услуги провайдера
          </Link>
        </NavbarComp.Brand>

        <div className="ms-auto d-flex align-items-center flex-row gap-3">
          <Link
            to="/login"
            className="fs-6 rounded-2 p-1 ps-2 pe-2 text-decoration-none text-dark login-link"
          >
            Войти
          </Link>

          <Link
            to="/register"
            className="fs-6 rounded-2 p-1 ps-2 pe-2 register-link"
          >
            Регистрация
          </Link>

          <Link to="/user">
            <img
              src={accountImage}
              alt="User"
              className="img-fluid rounded-2"
              style={{ maxHeight: '50px' }}
            />
          </Link>
        </div>
      </NavbarComp>

    );
  };