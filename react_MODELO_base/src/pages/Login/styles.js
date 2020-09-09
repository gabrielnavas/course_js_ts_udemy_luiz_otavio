import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;

    strong {
        width: 100%;
        background: ${props => props.isRed ? 'red' : 'blue'};
        color: white;
    }

    span {
        display: block;
        background: gray;
    }
`;
