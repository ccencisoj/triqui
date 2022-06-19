import React from 'react';
import { useGame } from 'hooks/GameContext';
import styles from './GameLayout1.module.scss';
import PlaySection1 from 'components/GameSection/PlaySection1';
import HomeSection1 from 'components/GameSection/HomeSection1';
import LoadingSection1 from 'components/GameSection/LoadingSection1';

class GameLayout1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { game } = this.props;

    return (
      <div className={styles.game_layout}>
        <HomeSection1 visible={!game.joinedGame}/>
        <LoadingSection1 visible={game.waitingPlayers}/>
        <PlaySection1 visible={game.startedGame}/>
      </div>
    )
  }
}

export default (props)=> {
  const game = useGame();
  return <GameLayout1 {...props} game={game}/>
}