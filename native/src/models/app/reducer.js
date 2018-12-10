import { SAVE_TOKEN, REQUEST_FAILED } from './constants';

const initialState = {
  token: '',
  prefs: {
    fontSize: 14,
    theme: 'default'
  },
  error: ''
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SAVE_TOKEN:
      return { ...state, token: payload };
    case REQUEST_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  };
}
