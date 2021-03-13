import React from 'react';
import { Snackbar } from '@material/react-snackbar';
import { FaTimes } from 'react-icons/fa';
import '@material/react-snackbar/dist/snackbar.css';

import StyledSnackbar from './styles';

function CustomSnackbar({ message, timeout, theme = 'primary' }) {
  return (
    <StyledSnackbar theme={theme}>
      <Snackbar message={message} actionText={(<FaTimes />)} timeoutMs={timeout} />
    </StyledSnackbar>
  );
}

export default CustomSnackbar;
