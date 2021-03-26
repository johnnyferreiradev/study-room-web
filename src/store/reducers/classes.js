const INITIAL_STATE = {
  classes: [{
    id: 1,
    title: 'Turma teste 1',
    description: 'Descrição da turma teste 1',
  }],
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
    case 'CLEAR_CLASSES':
      return INITIAL_STATE;
    default:
      return state;
  }
}
