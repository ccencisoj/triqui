import React from 'react';
import clsx from 'clsx';
import * as Icon from 'react-feather';
import { useGame } from 'hooks/GameContext';
import Button from 'components/Button/Button';
import styles from './PodiumBlock1.module.scss';

const PodiumBlock1 = ({
  image,
  label,
  visible,
  game
})=> {
  const styles_podium_block = clsx({
    [styles.podium_block]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible
  });

  return (
    <div className={styles_podium_block}>
      <img className={styles.image} src={image}/>
      <p className={styles.label}>{label}</p>
      <Button 
        icon={Icon.RefreshCcw} 
        label="Jugar de nuevo"
        lightTheme={true}
        onClick={()=> game.playAgain()}/>
    </div>
  )
}

export default (props)=> {
  const game = useGame();
  return <PodiumBlock1 {...props} game={game}/>
}