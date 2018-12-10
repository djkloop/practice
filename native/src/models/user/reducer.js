import { SAVE_USER } from './constants';

const initialState = {
  user: {}
};

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case SAVE_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
