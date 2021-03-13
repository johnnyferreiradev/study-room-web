import React from 'react';
import { APP_NAME } from '../settings';

const appSettings = {
  appName: APP_NAME,
};

export const AppSettingsContext = React.createContext();

const AppContext = ({ children }) => (
  <AppSettingsContext.Provider value={appSettings}>
    {children}
  </AppSettingsContext.Provider>
);

export default AppContext;
