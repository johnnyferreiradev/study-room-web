import React from 'react';
import Routes from 'routes';

import AppContext from 'contexters/AppContext';
import RefsContext from 'contexters/RefsContext';

import './App.css';

function App() {
  return (
    <AppContext>
      <RefsContext>
        <Routes />
      </RefsContext>
    </AppContext>
  );
}

export default App;
