import React from 'react';
import { connect } from 'react-redux';
import mapMatrix from 'utils/mapMatrix';
import { useGame } from 'hooks/GameContext';
import styles from './Dashboard1.module.scss';
import DashboardSquare1 from 'components/DashboardSquare/DashboardSquare1';
import clsx from 'clsx';

const mapStateToProps = (store)=> ({
  dashboard: store.game.dashboard
});

class Dashboard1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { game, visible } = this.props;

    const styles_dashboard = clsx({
      [styles.dashboard]: true,
      [styles.visible]: visible,
      [styles.hidden]: !visible
    }); 

    return (
      <div className={styles_dashboard}>
        {mapMatrix(game.dashboard, (token, index, row, column)=> {
          return <DashboardSquare1 
            key={index} 
            index={index} 
            token={token}
            onClick={()=> game.play({row, column})}/>
        })}
      </div>
    )
  }
}

const ConnDashboard1 = connect(
  mapStateToProps, null)(Dashboard1);

export default (props)=> {
  const game = useGame();
  return <ConnDashboard1 {...props} game={game}/>
}