import { FC } from "react";
import { Navbar } from "../../components/Navbar";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";

export const UserPage: FC = () => {
    return (
        <>
        <Navbar />
        <Container className="d-flex justify-content-center" style={{ minHeight: '100vh' }}>
            <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '600px' }}>
                <h1 className="text-center mb-5">Изменение данных аккаунта</h1>
                <Form.Floating>
                    <Form.Control
                    id="username"
                    type="text"
                    />
                    <label htmlFor="username">Имя</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                    id="login"
                    type="text"
                    />
                    <label htmlFor="login">Логин</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                    id="password"
                    type="password"
                    />
                    <label htmlFor="password">Пароль</label>
                </Form.Floating>
        
                <button type="submit" className="fs-5 btn btn-block w-100" style={{ color: "#ffffff", backgroundColor: "#210772"}}>Сохранить</button>
            </div> 
        </Container> 
        </>
    );
}