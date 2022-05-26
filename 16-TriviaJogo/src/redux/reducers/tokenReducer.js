import { SAVE_TOKEN } from '../actions';

const saveEmailToken = (state = '5yrt', action) => {
  switch (action.type) {
  case SAVE_TOKEN:
    return action.payload;
  default:
    return state;
  }
};

export default saveEmailToken;
