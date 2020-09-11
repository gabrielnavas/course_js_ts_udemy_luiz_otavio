import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './store';
import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes';

function App() {

  return (

    //  usar useSelector e useDispatch em qualquer componente 
    < Provider store={store} >

      {/* persistir dados do redux no localstorage */}
      < PersistGate persistor={persistor} >

        {/* poder direcionar para qualquer url e armazenar ela */}
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />

          {/* mandar mensagem de alerta em qualquer componente */}
          <ToastContainer
            autoClose={3000}
            className="toast-container"
          />
        </Router>
      </PersistGate >
    </Provider >
  );
}

export default App;
