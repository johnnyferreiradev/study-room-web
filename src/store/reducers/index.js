import { combineReducers } from 'redux';

import snackbar from './snackbar';
import modal from './modal';

export default combineReducers({
  snackbar,
  modal,
});
