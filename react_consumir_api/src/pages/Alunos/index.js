import React from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa'

import axios from '../../services/axios';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture, Actions } from './styles';

import Loading from '../../components/Loading';

function Alunos() {

    const [alunos, setAlunos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        async function getData() {
            setIsLoading(true);
            
            const response = await axios.get('/alunos');
            setAlunos(response.data);

            setIsLoading(false);
        };


        getData();
    }, []);



    return (
        <Container isRed={false}>
            <Loading isLoading={isLoading} />
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