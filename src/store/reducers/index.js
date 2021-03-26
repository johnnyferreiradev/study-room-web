import { combineReducers } from 'redux';

import snackbar from './snackbar';
import modal from './modal';
import classes from './classes';

export default combineReducers({
  snackbar,
  modal,
  classes,
});
