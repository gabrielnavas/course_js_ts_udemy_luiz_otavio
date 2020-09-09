import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from './styles';
import * as exampleActions from '../../store/modules/example/actions';

function Login() {
    const dispatch = useDispatch();
    
    function handleClick(e) {
        e.preventDefault();

        dispatch(exampleActions.clicaBotaoRequest());
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