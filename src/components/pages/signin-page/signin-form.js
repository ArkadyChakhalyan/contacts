import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { onLogin } from '../../../actions/actions';
import Service from '../../../services/service';

const service = new Service();

export const SigninForm = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onSubmit = (e) => {

        e.preventDefault();

        const data = new FormData(e.currentTarget);

        service.onLogin(
            data.get('login'),
            data.get('password')
        )
            .then((result) => {
                dispatch(onLogin(result));
                navigate('/contacts');
            })
            .catch(() => {
                setLoginError(true);
                setPasswordError(true);
                setPassword('');
            });
    };

    const [disabled, setDisabled] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLoginChange = (e) => {
        setLogin(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (
            login === ''
            || password === ''
        ) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }

        if (password !== '') {
            setLoginError(false);
            setPasswordError(false);
        }

    }, [login, password])

    return (
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                autoComplete="login"
                autoFocus
                error={loginError}
                onChange={onLoginChange}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError}
                onChange={onPasswordChange}
                value={password}
            />
            <Button
                type="submit"
                fullWidth
                disabled={disabled}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                войти
            </Button>
        </Box>
    );
};