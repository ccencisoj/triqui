import React from 'react';
import { useGame } from 'hooks/GameContext';
import styles from './PlayerList1.module.scss';
import PlayerCard1 from 'components/PlayerCard/PlayerCard1';
import clsx from 'clsx';

const PlayerList1 = ({game, rowDirection})=> {
  const styles_player_list = clsx({
    [styles.player_list]: true,
    [styles.row_direction]: rowDirection
  });

  return (
    <div className={styles_player_list}>
      {game.playerList.map((player)=> 
        <PlayerCard1 key={player.id} {...player}/>)}
    </div>
  )
}

export default (props)=> {
  const game = useGame();
  return <PlayerList1 {...props} game={game}/>
}