import React from 'react';
import { useGame } from 'hooks/GameContext';
import styles from './DashboardBlock1.module.scss';
import Dashboard1 from 'components/Dashboard/Dasboard1';
import PodiumBlock1 from 'components/PodiumBlock/PodiumBlock1';

class DashboardBlock1 extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const { game } = this.props;

    return (
      <div className={styles.dashboard_block}>
        {!game.endedGame &&
        <div className={styles.header}>
          {game.turn ?
          <div className={styles.turn}>
            <p className={styles.token}>
              ({game.turnPlayer.token}) 
            </p>
            Tu <p className={styles.resalted}>turno</p> 
          </div> :
          <div className={styles.turn}>
            Turno de 
            <p className={styles.resalted}>
              {game.turnPlayer.name}
            </p>
          </div>}
        </div>}
        <div className={styles.main}>
          <Dashboard1 visible={!game.endedGame}/>
          <PodiumBlock1 
            image="image/winner1.svg" 
            label="Ganador"
            visible={game.winner}/>
          <PodiumBlock1 
            image="image/loser1.svg" 
            label="Perdedor"
            visible={game.loser}/>
          <PodiumBlock1 
            image="image/tie1.svg" 
            label="Empate"
            visible={game.tie}/>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const game = useGame();
  return <DashboardBlock1 {...props} game={game}/>
}