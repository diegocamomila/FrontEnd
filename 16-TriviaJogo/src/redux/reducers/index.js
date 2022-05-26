import { combineReducers } from 'redux';
import tokenReducer from './tokenReducer';
import playerReducer from './playerReducer';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  player: playerReducer,
  counter: counterReducer,
});

export default rootReducer;
