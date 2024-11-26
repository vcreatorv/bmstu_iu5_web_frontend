import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import { useAppDispatch } from "../../core/store/hooks";
import { api } from "../../core/api";
import { AuthRequestDTO } from "../../core/api/API";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveUser } from "../../core/store/slices/userSlice";


export const LoginForm: FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
    
        const authRequestDTO: AuthRequestDTO = {
            login: login,
            password: password
        };
    
        try {
            const response = await api.loginUser(authRequestDTO);
    
            if (response.data.accessToken) {
                dispatch(saveUser({ login: login, accessToken: response.data.accessToken }));
                navigate('/provider-duties');
            } 
            else {
                setError('Ошибка авторизации. Попробуйте снова.');
            }
        } 
        catch (err) {
            setError('Такого пользователя нет. Проверьте данные.');
            console.error(err);
        }
    };

    return (
        <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '500px' }}>
        <h1 className="text-center">Вход в систему</h1>
        <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mt-5">
            <Form.Floating>
                <Form.Control
                    id="login"
                    type="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                />
                <label htmlFor="login">Логин</label>
            </Form.Floating>
            
            <Form.Floating>
                <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="password">Пароль</label>
            </Form.Floating>

            <button id="sign-in" type="submit" className="fs-5 btn btn-block w-100" style={{ color: "#ffffff", backgroundColor: "#210772"}}>Войти</button>
            {error && (
              <div className="alert alert-danger mt-3">
                {error}
              </div>
            )}
        </Form>
        <p className="fs-5 text-center">Нет аккаунта?
             <Link className="ps-2" to='/register'>
                Создайте!
             </Link>
        </p>
      </div>
    );
}