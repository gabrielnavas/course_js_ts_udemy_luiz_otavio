import React from 'react';


import GlobalStyle, { Container } from './styles/GlobalStyles';
import Login from './pages/Login';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
    <button type="button">Enviar</button>
    </Container>
  );
}

export default App;
