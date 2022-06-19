import React from 'react';
import styles from './PlayersBlock1.module.scss';
import { useViewport } from 'hooks/ViewportContext';
import PlayerList1 from 'components/PlayerList/PlayerList1';

class PlayersBlock1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { viewport } = this.props;

    return (
      <div className={styles.players_block}>
        <div className={styles.header}>
          <img className={styles.icon} src="icon/users1.svg"/>
          <p className={styles.label}>Jugadores</p>
        </div>
        <div className={styles.main}>
          <PlayerList1 rowDirection={viewport.isTablet}/>
        </div>
      </div>
    )
  }
}

export default (props)=> {
  const viewport = useViewport();
  return <PlayersBlock1 {...props} viewport={viewport}/>
}