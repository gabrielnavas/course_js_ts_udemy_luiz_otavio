import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

function Login(props) {
    const isLoading = useSelector(state => state.auth.isLoading);

    const dispatch = useDispatch();

    const prevPath = get(props, 'location.state.prevPath', '/');

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

        dispatch(actions.loginRequest({ email, password, prevPath }));
    }

    return (
        <Container isRed={false}>
            <Loading isLoading={isLoading} />

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