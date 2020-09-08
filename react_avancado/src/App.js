import React from 'react';


import GlobalStyle, { Container } from './styles/GlobalStyles';
import Login from './pages/Login';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Login />
    </Container>
  );
}

export default App;
