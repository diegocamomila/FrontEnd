// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { SAVE_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  //   case SAVE_USER_EMAIL:
  //     // console.log(action);
  //     return {
  //       ...state,
  //       email: action.payload,
  //     };
  default:
    return state;
  }
};

export default WalletReducer;
