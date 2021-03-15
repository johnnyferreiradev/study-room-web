const INITIAL_STATE = {
  message: '',
  theme: '',
  timeout: 4000,
  showSnackbar: false,
};

export default function snackbar(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_SNACKBAR':
      return {
        ...state,
        message: action.message,
        theme: action.theme,
        timeout: action.timeout,
        showSnackbar: action.showSnackbar,
      };
    case 'HIDE_SNACKBAR':
      return INITIAL_STATE;
    default:
      return state;
  }
}
