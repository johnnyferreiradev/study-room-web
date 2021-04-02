const INITIAL_STATE = {
  classes: [],
  currentClass: {},
  loaded: false,
};

export default function classes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CLASSES':
      return {
        ...state,
        classes: action.classes,
        loaded: state.loaded,
      };
    case 'SET_CURRENT_CLASS':
      return {
        ...state,
        currentClass: action.currentClass,
      };
    case 'CLEAR_CLASSES':
      return INITIAL_STATE;
    default:
      return state;
  }
}
