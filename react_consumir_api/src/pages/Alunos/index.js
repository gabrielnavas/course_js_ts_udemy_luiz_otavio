import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, Actions } from './styles';

function Alunos() {

    const [alunos, setAlunos] = React.useState([]);

    React.useEffect(() => {
        async function getData() {
            const response = await axios.get('/alunos');
            // console.log(response.data);
            setAlunos(response.data);
        };

        getData();
    }, []);



    return (
        <Container isRed={false}>
            <h1>Alunos</h1>

            <AlunoContainer>
                {alunos.map(aluno => (
                    <div key={String(aluno.id)}>
                        <ProfilePicture>
                            {
                                get(aluno, 'Fotos[0].url', false) ? (
                                    <img src={aluno.Fotos[0].url} alt="" />
                                ) : (
                                        <FaUserCircle size={36} />
                                    )
                            }
                        </ProfilePicture>

                        <span>{aluno.nome}</span>
                        <span>{aluno.email}</span>

                        <Actions>
                            <Link to={`/aluno/${aluno.id}/edit`}>
                                <FaEdit size={16} />
                            </Link>
                            <Link to={`/aluno/${aluno.id}/delete`}>
                                <FaWindowClose size={16} />
                            </Link>
                        </Actions>
                    </div>
                ))}
            </AlunoContainer>
        </Container>
    );
}

export default Alunos;