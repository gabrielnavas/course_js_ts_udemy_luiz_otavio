import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import * as actions from '../../store/modules/auth/actions';

function Login() {
    const dispatch = useDispatch();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();

        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.error('Senha tem que ser entre 6 e 50 caracters');
        }

        if (formErrors) return;

        dispatch(actions.loginRequest({ email, password }));
    }

    return (
        <Container isRed={false}>
            <h1>Login</h1>

            <Form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    E-mail:
                    <input
                        type="text"
                        value={email}
                        placeholder="Seu E-mail."
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="email">
                    Senha:
                    <input
                        type="password"
                        value={password}
                        placeholder="Seu E-mail."
                        onChange={e => setPassword(e.target.value)}
                    />

                </label>

                <button type='submit'>Acessar</button>
            </Form>
        </Container>
    );
}

export default Login;