import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Container, Form } from "react-bootstrap";


export const RegisterPage: FC = () => {
    return (
        <>
        <Navbar />
        <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '500px' }}>
            <h1 className="text-center mb-5">Регистрация</h1>

            <Form.Floating>
                <Form.Control
                id="login"
                type="text"
                placeholder="vcreatorv"
                />
                <label htmlFor="login">Логин</label>
            </Form.Floating>

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
    
          </div> 
        </Container> 
        </>
    );
}