import { combineReducers } from 'redux';
import gameReducer from 'reducers/game';

export default combineReducers({
  game: gameReducer
});