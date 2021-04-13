const INITIAL_STATE = {
  fileList: [],
};

export default function files(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FILE_LIST':
      return {
        ...state,
        fileList: action.fileList,
      };
    default:
      return state;
  }
}
