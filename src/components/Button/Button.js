import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({
  icon: Icon,
  label,
  primaryColor,
  gameTheme,
  silverTheme,
  lightTheme,
  expand,
  onClick,
  onHover
})=> {

  const styles_button = clsx({
    [styles.button]: true,
    [styles.only_icon]: !label,
    [styles.primary_color]: primaryColor,
    [styles.game_theme]: gameTheme,
    [styles.silver_theme]: silverTheme,
    [styles.light_theme]: lightTheme,
    [styles.expand]: expand
  });

  return (
    <button className={styles_button} 
      onClick={onClick} onMouseMove={onHover}>
      {Icon && <Icon className={styles.icon}/>}
      {label && <p className={styles.label}>{label}</p>}
    </button>
  )
}

export default Button;