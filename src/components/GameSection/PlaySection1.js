import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import { useGame } from 'hooks/GameContext';
import Button from 'components/Button/Button';
import styles from './PlaySection1.module.scss';
import PlayersBlock1 from 'components/PlayersBlock/PlayersBlock1';
import DashboardBlock1 from 'components/DashboardBlock/DashboardBlock1';

const PlaySection1 = ({visible, game})=> {
  const styles_play_section = clsx({
    [styles.play_section]: true,
    [styles.visible]: visible,
    [styles.visible_without_delay]: game.startedGame,
    [styles.hidden]: !visible
  });

  return (
    <div className={styles_play_section}>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <Button 
            icon={Icon.ChevronLeft} 
            label="Abandonar juego"
            silverTheme={true}
            onClick={()=> game.leave()}/>
        </div>
        <div className={styles.main}>
          <PlayersBlock1/>
          <DashboardBlock1/>
        </div>  
      </div>
    </div>
  )
}

export default (props)=> {
  const game = useGame();
  return <PlaySection1 {...props} game={game}/>
}