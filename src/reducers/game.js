import list from 'utils/list';
import { 
  ADD_PLAYER,
  DELETE_PLAYER,
  STARTED_GAME,
  ENDED_GAME,
  JOINED_GAME,
  LEAVE_GAME,
  CHANGED_TURN,
  CHANGED_DASHBOARD,
} from 'constants/actionTypes';

const initialState = {
  player: null,
  playing: false,
  startedGame: false,
  waitingPlayers: false,
  winner: null,
  playerList: [],
  turnPlayer: null,
  dashboard: []
};

export default (state=initialState, action)=> {
  switch (action.type) {
    case LEAVE_GAME:
      return {
        ...state,
        player: null,
        playing: false,
        startedGame: false,
        waitingPlayers: false,
        winner: null,
        playerList: [],
        turnPlayer: null,
        dashboard: []
      };

    case JOINED_GAME:
      return {
        ...state,
        playing: true,
        player: action.payload.player,
        waitingPlayers: true,
      };

    case STARTED_GAME:
      return {
        ...state,
        startedGame: true,
        waitingPlayers: false,
        dashboard: action.payload.dashboard,
        playerList: action.payload.playerList,
        turnPlayer: action.payload.turnPlayer
      };

    case ENDED_GAME:
      return {
        ...state,
        playing: false,
        winner: action.payload.winner
      };

    case CHANGED_TURN:
      return {
        ...state,
        turnPlayer: action.payload.turnPlayer 
      };

    case CHANGED_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload.dashboard
      }

    case ADD_PLAYER:
      return {
        ...state,
        playerList: list(state.playerList).add(action.payload.player)
      };

    case DELETE_PLAYER:
      return {
        ...state,
        playerList: list(state.playerList).delete(action.payload.player)
      };

    default:
      return state;
  }
}