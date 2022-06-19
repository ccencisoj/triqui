import React from 'react';
import clsx from 'clsx';
import Field from 'components/Field/Field';
import { useGame } from 'hooks/GameContext';
import Button from 'components/Button/Button';
import styles from './HomeSection1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import ParallaxItem1 from 'components/ParllaxItem/ParallaxItem1';

const HomeSection1 = ({visible, game, viewport})=> {
  const styles_home_section = clsx({
    [styles.home_section]: true,
    [styles.visible]: visible,
    [styles.hidden]: !visible
  });

  return (
    <div className={styles_home_section}>
      <ParallaxItem1 
        visible={visible} 
        className={styles.equis1} 
        src="image/equis2.svg"
        cursorEffect={viewport.isDesktop}/>
      <ParallaxItem1 
        visible={visible} 
        className={styles.circle1} 
        src="image/circle2.svg"
        cursorEffect={viewport.isDesktop}/>
      <ParallaxItem1 
        visible={visible} 
        className={styles.circle2} 
        src="image/circle2.svg"
        cursorEffect={viewport.isDesktop}/>
      <ParallaxItem1 
        visible={visible} 
        className={styles.circle3} 
        src="image/circle2.svg"
        cursorEffect={viewport.isDesktop}/>
      <ParallaxItem1 
        visible={visible} 
        className={styles.dashboard1} 
        src="image/dashboard1.svg"
        cursorEffect={viewport.isDesktop}/>
      <ParallaxItem1 
        visible={visible} 
        className={styles.dashboard2} 
        src="image/dashboard1.svg"
        cursorEffect={viewport.isDesktop}/>
      <div className={styles.form}>
        <div className={styles.header}>
          <p className={styles.title}>Triqui</p>
        </div>
        <div className={styles.main}>
          <Field 
            defaultValue={game.playerName}
            placeholder="Nombre"
            onChange={(ev)=> game.setPlayerName(ev.target.value)}
            onEnter={()=> game.join()}/>
          <Button 
            label="Jugar" 
            expand={true}
            gameTheme={true}
            onClick={()=> game.join()}/>
        </div>
      </div>
    </div>
  )
}

export default (props)=> {
  const game = useGame();
  const viewport = useViewport();

  return <HomeSection1 {...props} 
    game={game} viewport={viewport}/>;
}