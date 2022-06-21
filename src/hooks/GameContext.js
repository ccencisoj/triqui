import React from 'react';
import list from 'utils/list';
import io from 'socket.io-client';

const GameContext = React.createContext({});

const socket = io(process.env.SOCKET_URL, {secure: true});

const GameProvider = ({children})=> { 
  const initialState = {
    winner: false,
    loser: false,
    tie: false,
    playerName: "",
    player: {},
    turn: false,
    turnPlayer: {},
    dashboard: [],
    playerList: [],
    joinedGame: false,
    startedGame: false,
    endedGame: false,
    waitingPlayers: false
  };
  
  const [state, setState] = React.useState(initialState);
  const resetState = ()=> setState(initialState);
  const updateState = (newState)=> setState((prevState)=> {
    newState = typeof newState === "function" ? newState(prevState) : newState;   
    return ({...prevState, ...newState})
  });

  // Establece el nombre del juegador
  const setPlayerName = (playerName)=> {
    updateState({playerName: playerName});
  }

  // Ingresa a la sala
  const join = ()=> {
    socket.emit("join", state.playerName, (player)=> {
      updateState({
        player: player,
        joinedGame: true,
        waitingPlayers: true
      });
    });
  }

  // Escucha eventos de la sala
  React.useEffect(()=> {
    socket.on("leave player", (player)=> {
      updateState(({playerList, endedGame})=> {
        const leave = endedGame ? false : true; 
        return {playerList: list(playerList).updateById(player.id, {leave})};
      })
    });

    socket.on("started", (game)=> {   
      updateState(({player})=> ({
        startedGame: true,
        waitingPlayers: false,
        dashboard: game.dashboard,
        turnPlayer: game.turnPlayer,
        turn: game.turnPlayer.id === player.id,
        playerList: game.playerList.map((player)=> ({...player, leave: false})),
      }));
    });

    socket.on("changed dashboard", (dashboard)=> {
      updateState({dashboard: dashboard});
    }); 

    socket.on("changed turn", (turnPlayer)=> {
      updateState(({player})=> ({
        turnPlayer: turnPlayer,
        turn: turnPlayer.id === player.id
      }));
    });

    socket.on("ended", (winner)=> {
      updateState(({player})=> ({
        endedGame: true,
        tie: winner == null,
        loser: winner && winner.id !== player.id,
        winner: winner && winner.id === player.id,
      }));
    });
  }, []);
  
  // Deja la sala y se reinicia el estado
  const leave = ()=> {
    socket.emit("leave");
    resetState();
  }
  
  // Juega una posición en el tablero
  const play = (position)=> {
    socket.emit("play", position, ({error})=> {
      if(error) console.log(error);
    });
  }

  // Inicia un nuevo juego
  const playAgain = ()=> {
    leave();
    join();
  }

  return (
    <GameContext.Provider value={{
      ...state, 
      join, 
      leave, 
      play, 
      playAgain,
      setPlayerName}}>
      {children}
    </GameContext.Provider>
  )
}

const useGame = ()=> {
  return React.useContext(GameContext);
}

export { GameProvider, useGame };