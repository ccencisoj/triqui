import React from 'react';
import clsx from 'clsx';
import styles from './PlayerCard1.module.scss';
import { useGame } from 'hooks/GameContext';
import { 
  EQUIS_TOKEN, 
  CIRCLE_TOKEN 
} from 'constants/tokens';

const PlayerCard1 = ({
  id,
  name,
  image,
  token,
  leave
})=> {
  const styles_player_card = clsx({
    [styles.player_card]: true,
    [styles.hidden_leave_wrapper]: !leave,
    [styles.visible_leave_wrapper]: leave
  });

  return (
    <div className={styles_player_card}>
      <div className={styles.wrapper}>
        <img className={styles.image} src="image/user3.svg"/>
        <div className={styles.column}>
          <p className={styles.name}>{name}</p>
          <p className={styles.id}>#{id}</p>
        </div>
        {token === EQUIS_TOKEN &&
        <img className={styles.token} src="image/equis3.svg"/>}
        {token === CIRCLE_TOKEN &&
        <img className={styles.token} src="image/circle3.svg"/>}
      </div>
      <div className={styles.leave_wrapper}>
        <img className={styles.image} src="image/user3.svg"/>
        <div className={styles.column}>
          <p className={styles.name}>{name}</p>
          <p className={styles.sentence}>Abandono la partida</p>
        </div>
      </div>
    </div>
  )
}

export default (props)=> {
  const game = useGame();
  return <PlayerCard1 {...props} game={game}/>;
}