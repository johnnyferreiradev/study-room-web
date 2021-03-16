import React from 'react';
import { useDispatch } from 'react-redux';
import { Snackbar } from '@material/react-snackbar';
import { FaTimes } from 'react-icons/fa';

import hideSnackbar from 'store/actions/snackbar/hideSnackbar';

import StyledSnackbar from './styles';

function CustomSnackbar({ message, timeout, theme = 'primary' }) {
  const dispatch = useDispatch();

  const handleOnClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <StyledSnackbar theme={theme}>
      <Snackbar
        message={message}
        actionText={(<FaTimes />)}
        timeoutMs={timeout}
        onClose={handleOnClose}
      />
    </StyledSnackbar>
  );
}

export default CustomSnackbar;
