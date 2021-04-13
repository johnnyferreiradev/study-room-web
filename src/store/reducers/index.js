import { combineReducers } from 'redux';

import snackbar from './snackbar';
import modal from './modal';
import classes from './classes';
import profile from './profile';
import upload from './upload';

export default combineReducers({
  snackbar,
  modal,
  classes,
  profile,
  upload,
});
