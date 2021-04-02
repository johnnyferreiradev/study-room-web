import React from 'react';
import Routes from 'routes';
import { Provider } from 'react-redux';
import '@material/react-snackbar/dist/snackbar.css';
import 'moment/locale/pt-br';

import store from 'store';

import AppContext from 'contexters/AppContext';
import RefsContext from 'contexters/RefsContext';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <AppContext>
        <RefsContext>
          <Routes />
        </RefsContext>
      </AppContext>
    </Provider>
  );
}

export default App;
