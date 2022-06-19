import React from 'react';
import styles from './Field.module.scss';

const Field = ({
  name,
  label,
  error,
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  onEnter
})=> {
  return (
    <div className={styles.field} 
      onChange={onChange} 
      onBlur={onBlur} 
      onFocus={onFocus}
      onKeyDown={(ev)=> (onEnter && ev.key === "Enter") ? onEnter(ev) : null}>
      <p className={styles.label}>{label}</p>
      <input 
        className={styles.input}
        type="text" 
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}/>
      <p className={styles.error}>{error}</p>
    </div>
  )
}

export default Field;