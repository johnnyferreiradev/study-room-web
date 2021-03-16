const INITIAL_STATE = {
  modalContent: '',
  large: false,
  showGlobalModal: false,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SHOW_GLOBAL_MODAL':
      return {
        ...state,
        modalContent: action.modalContent,
        large: action.large,
        showGlobalModal: action.showGlobalModal,
      };
    case 'HIDE_GLOBAL_MODAL':
      return INITIAL_STATE;
    default:
      return state;
  }
}
