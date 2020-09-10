import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import axios from '../../services/axios';
import history from '../../services/history';

import Loading from '../../components/Loading';

function Register() {

    const [isLoading, setIsLoading] = React.useState(false);

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        let formErrors = false;

        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email está inválido.');
        }

        if (nome.length < 3 || nome.length > 50) {
            formErrors = true;
            toast.error('Nome deve ter entre 3 e 255 caracteres');
        }

        if (senha.length < 6 || senha.length > 50) {
            formErrors = true;
            toast.error('Senha deve ter entre 6 e 255 caracteres');
        }

        if (formErrors) return;

        setIsLoading(true);

        try {
            await axios.post('/users', {
                nome, email, senha,
            });
            
            toast.success('Você fez seu cadastro.');
            setIsLoading(false);

            history.push('/login');

        } catch (e) {
            const status = get(e, 'response.status', 0);
            const errors = get(e, 'response.data.errors', []);
            console.log('erros: ', errors);
            console.log('status: ', status);
            console.log('obj erros: ', e);

            errors.map( toast.error )
            setIsLoading(false);

        }
    }

    return (
        <Container isRed={false}>
        <Loading isLoading={isLoading} />

            <h1>Crie sua conta</h1>

            <Form onSubmit={handleSubmit}>

                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                        placeholder='Digite seu nome.'
                    />
                </label>

                <label htmlFor="email">
                    E-mail:
                    <input
                        type=""
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Digite seu e-mail.'
                    />
                </label>

                <label htmlFor="nome">
                    Senha:
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder='Digite sua senha.'
                    />
                </label>

                <button type="submit">Criar minha conta</button>
            </Form>

        </Container>
    );
}

export default Register;