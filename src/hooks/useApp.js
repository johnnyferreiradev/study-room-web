import { useContext } from 'react';
import { AppSettingsContext } from '../contexters/AppContext';

const useApp = () => {
  const app = useContext(AppSettingsContext);

  return app;
};

export default useApp;
