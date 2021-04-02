const INITIAL_STATE = {
  profileImage: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PROFILE_IMAGE':
      return {
        ...state,
        profileImage: action.profileImage,
      };
    default:
      return state;
  }
}
