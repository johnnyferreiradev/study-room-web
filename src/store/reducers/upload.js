const INITIAL_STATE = {
  fileList: [],
  cancellationList: [],
};

export default function upload(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FILE_LIST':
      return {
        ...state,
        fileList: action.fileList,
      };
    case 'SET_CANCELLATION_LIST':
      return {
        ...state,
        cancellationList: action.cancellationList,
      };
    default:
      return state;
  }
}
