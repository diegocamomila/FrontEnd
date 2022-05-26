import { COUNTER, ATT_SECONDS } from '../actions';

const INITIAL_STATE = {
  counter: false,
  seconds: 30,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case COUNTER:
    return {
      ...state,
      counter: !state.counter,
    };
  case ATT_SECONDS:
    return {
      ...state,
      seconds: state.seconds - 1,
    };
  default:
    return state;
  }
};

export default counterReducer;
