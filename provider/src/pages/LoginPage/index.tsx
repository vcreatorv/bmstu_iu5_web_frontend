import { FC } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';

export const LoginPage: FC = () => {
  return (
    <>
    <Navbar />
    <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="text-center mb-5">Вход в систему</h1>
        <Form.Floating>
            <Form.Control
            id="email"
            type="email"
            placeholder="name@example.com"
            />
            <label htmlFor="email">Почтовый адрес</label>
        </Form.Floating>
        <Form.Floating>
            <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            />
            <label htmlFor="password">Пароль</label>
        </Form.Floating>

        <button type="submit" className="fs-5 btn btn-block w-100" style={{ color: "#ffffff", backgroundColor: "#210772"}}>Войти</button>
        <p className="fs-5 text-center">Нет аккаунта? <a href='#'>Создайте!</a></p>

      </div> 
    </Container> 
    </>
  );
}