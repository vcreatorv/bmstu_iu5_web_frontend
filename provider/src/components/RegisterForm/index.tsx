import { FC, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { api } from "../../core/api";
import { UserDTO } from "../../core/api/API";
import { useAppDispatch } from "../../core/store/hooks";
import { saveUsername } from "../../core/store/slices/userSlice";


export const RegisterForm: FC = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== repeatPassword) {
            setError('Пароли не совпадают.');
            return;
        }
        
        const userDTO: UserDTO = {
            login: login,
            password: password,
            username: username,
        };

        try {
            const response = await api.createUser(userDTO);

            if (response.status === 200) {
                dispatch(saveUsername({username}));
                navigate('/login');
            } 
            else {
                setError('Ошибка регистрации. Попробуйте снова.');
            }
        } 
        catch (err) {
            setError('Ошибка регистрации. Попробуйте снова.');
            console.error(err);
        }
    };
    
    return (
        <div className="d-flex flex-column gap-3 mt-5" style={{ width: '100%', maxWidth: '500px' }}>
            <h1 className="text-center">Регистрация</h1>
            <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3 mt-5">
                <Form.Floating>
                    <Form.Control
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                    <label htmlFor="username">Имя</label>
                </Form.Floating>
                
                <Form.Floating>
                    <Form.Control
                    id="login"
                    type="email"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    required
                    />
                    <label htmlFor="login">Логин</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                    <label htmlFor="password">Пароль</label>
                </Form.Floating>

                <Form.Floating>
                    <Form.Control
                        id="repeatPassword"
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    <label htmlFor="repeatPassword">Повторите пароль</label>
                </Form.Floating>

                <button type="submit" className="fs-5 btn btn-block w-100" style={{ color: "#ffffff", backgroundColor: "#210772"}}>Зарегистрироваться</button>
                {error && (
                <div className="alert alert-danger mt-3">
                    {error}
                </div>
                )}
                </Form>
          </div> 
    );
}