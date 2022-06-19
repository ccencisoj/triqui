import React from 'react';
import clsx from 'clsx';
import styles from './DashboardSquare1.module.scss';
import { 
  EQUIS_TOKEN, 
  CIRCLE_TOKEN 
} from 'constants/tokens';

const DashboardSquare1 = ({
  index,
  token,
  onClick
})=> {
  
  const styles_dashboard_square = clsx({
    [styles.dashboard_square]: true,
    [styles.border_top]: [3, 4, 5].some((i)=> i === index),
    [styles.border_bottom]: [3, 4, 5].some((i)=> i === index), 
    [styles.border_left]: [1, 4, 7].some((i)=> i === index),
    [styles.border_right]: [1, 4, 7].some((i)=> i === index),
  });

  return (
    <div className={styles_dashboard_square} onClick={onClick}>
      {token === EQUIS_TOKEN && 
      <img className={styles.figure} src="image/equis1.svg"/>}
      {token === CIRCLE_TOKEN && 
      <img className={styles.figure} src="image/circle1.svg"/>}
    </div>
  )
}

export default DashboardSquare1;