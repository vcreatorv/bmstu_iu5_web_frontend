import { FC } from 'react';
import { Container, Nav, Navbar as NavbarComp } from 'react-bootstrap';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logoImage from "/logo.png"
import accountImage from "/images/account.png"
import { RootState } from '../../core/store';
import { useAppDispatch, useAppSelector } from '../../core/store/hooks';
import { logoutUser } from '../../core/store/slices/userSlice';
import { api } from '../../core/api';

export const Navbar: FC = () => {
  const isAuth = useAppSelector((state: RootState) => state.user.isAuth);
  const connectionRequestId = useAppSelector((state: RootState) => state.app.connectionRequestId);
  const dispatch = useAppDispatch();
  
  
  const handleLogout = async () => {
    if (connectionRequestId == null || connectionRequestId == 0) {
      dispatch(logoutUser());
    }
    else {
      try {
        const response = await api.deleteConnectionRequest(connectionRequestId);

        if (response.status === 200) {
            dispatch(logoutUser());
        } 
        else {
            alert('Ошибка при выходе из аккаунта');
            console.log(response.status);
        }
      } 
      catch (err) {
          alert(err);
          console.log(err);
      }
    }
  };
    return (
      <NavbarComp expand="lg" className="navbar logo-container border-bottom border-secondary border-2" sticky="top">
      <Container fluid>
        <NavbarComp.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logoImage}
            alt="Logo"
            className="img-fluid rounded-2"
            style={{ maxHeight: '60px' }}
          />
        </NavbarComp.Brand>
        
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/provider-duties" className="text-dark catalog-link">
              Интернет услуги провайдера
            </Link>
          </Nav>
          
          <Nav>
            {isAuth ? (
             <>
              <Link 
                to="/provider-duties" 
                onClick={handleLogout} 
                className="logout-link text-dark d-flex align-items-center me-2"
              >
                Выйти
              </Link>
              
              <Link to="/connection-requests-list" className="requests-link me-2">
                История заказов
              </Link> 
        
              <Link to="/user-account" className="d-none d-lg-block ms-3">
                <img
                  src={accountImage}
                  alt="User"
                  className="img-fluid rounded-2"
                  style={{ maxHeight: '40px' }}
                />
              </Link>
        
              <Link to="/user-account" className="d-lg-none profile-link">
                Профиль
              </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="login-link text-dark d-flex align-items-center me-2">
                  Войти
                </Link>
                <Link to="/register" className="register-link d-flex align-items-center me-2">
                  Регистрация
                </Link>
              </>
            )}
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
    );
  };