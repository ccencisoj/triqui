import React from 'react';
import styles from './Loading1.module.scss';

class Loading1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render = ()=> {
    const { label } = this.props;

    return (
      <div className={styles.loading}>
        <div className={styles.circle}></div>
        <p className={styles.label}>{label}</p>
      </div>
    )
  }
}

export default Loading1;