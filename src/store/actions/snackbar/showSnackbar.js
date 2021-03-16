const showSnackbar = (message, theme, timeout) => ({
  type: 'SHOW_SNACKBAR',
  message,
  theme,
  timeout: timeout || 4000,
  showSnackbar: true,
});

export default showSnackbar;
