import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

import {toast} from 'react-toastify';

function App() {
  
  toast.success('oie, sucesso');
  toast.error('oie, sucesso');
  toast.info('oie, sucesso');
  
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ToastContainer
        autoClose={3000}
        className="toast-container"
      />
    </Router>
  );
}

export default App;
