import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import Button from 'components/Button/Button';
import { useGame } from 'hooks/GameContext';
import styles from './LoadingSection1.module.scss';
import Loading1 from 'components/Loading/Loading1';

const LoadingSection1 = ({visible, game})=> {  
  const styles_loading_section = clsx({
    [styles.loading_section]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible,
    [styles.hidden_without_delay]: (!game.joinedGame || game.startedGame)
  }, [visible]);

  return (
    <div className={styles_loading_section}>
      <div className={styles.column}>
        <Loading1 label="Esperando jugadores"/>
        <Button 
          icon={Icon.X} 
          label="Cancelar" 
          lightTheme={true}
          onClick={()=> game.leave()}/>
      </div>
    </div>
  ) 
}

export default (props)=> {
  const game = useGame();
  return <LoadingSection1 {...props} game={game}/>
}