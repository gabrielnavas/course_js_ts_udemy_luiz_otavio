import React from 'react';


import GlobalStyle, { Container } from './styles/GlobalStyles';
import Login from './pages/Login';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Login />
        <GlobalStyle />
        <button type="button">Enviar</button>
      </Container>
    </>
  );
}

export default App;
