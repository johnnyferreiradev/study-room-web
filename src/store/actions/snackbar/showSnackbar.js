const showSnackbar = (message, theme, timeout) => ({
  type: 'SHOW_SNACKBAR',
  message,
  theme,
  timeout,
  showSnackbar: timeout || 4000,
});

export default showSnackbar;
