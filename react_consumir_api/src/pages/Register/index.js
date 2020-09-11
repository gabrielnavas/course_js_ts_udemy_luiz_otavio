import React from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styles';
import * as actions from '../../store/modules/auth/actions';

import Loading from '../../components/Loading';

function Register() {
    const {
        id,
        nome: nomeStorad,
        email: emailStorad
    } = useSelector(state => state.auth.user);

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.auth.isLoading);

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    React.useEffect(() => {

        function setDataEdit() {
            if (!id) return;
    
            setNome(nomeStorad);
            setEmail(emailStorad);
        }

        setDataEdit();
    }, [id, nomeStorad, emailStorad]);

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

        if (!id) {
            if (senha.length < 6 || senha.length > 50) {
                formErrors = true;
                toast.error('Senha deve ter entre 6 e 255 caracteres');
            }
        }

        if (formErrors) return;

        dispatch(actions.registerRequest({ nome, email, senha, id }));
    }

    return (
        <Container isRed={false}>
            <Loading isLoading={isLoading} />

            <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

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

                <button type="submit">{id ? 'Editar meus dados' : 'Criar minha conta'}</button>
            </Form>

        </Container>
    );
}

export default Register;