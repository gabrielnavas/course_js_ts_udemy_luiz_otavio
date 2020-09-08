import React from 'react';

import { Container } from './styles';

import axios from '../../services/axios';

function Login() {

    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            console.log(response);
        }

        getData();
    }, []);

    return (
        <Container isRed={false}>
            <strong>
                Hello world!!
            </strong>
            <span>Lorem Lorem IpUão :D</span>
            <a href='google.com'>google</a>
        </Container>
    );
}

export default Login;