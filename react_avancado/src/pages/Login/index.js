import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';

function Login() {
    const dispatch = useDispatch();
    
    function handleClick(e) {
        e.preventDefault();

        dispatch({
            type: 'BOTAO_CLICADO',
            payload: {email: 'bla@asdasd', senha:'123'}
        })
    }

    return (
        <Container isRed={false}>
            <strong>
                Hello world!!
            </strong>
            <span>Lorem Lorem IpUão :D</span>
            <a href='google.com'>google</a>
            <button
                type='button'
                onClick={handleClick}
            >Enviar</button>
        </Container>
    );
}

export default Login;