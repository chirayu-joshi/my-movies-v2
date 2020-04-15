import React from 'react';

import styles from './Modal.module.css';
import closeIcon from '../../assets/images/close.png';

const modal = props => {
  return (
    <div className={styles.container}>
      <button onClick={() => props.close()} className={styles.close}>
        <img src={closeIcon} alt="close" />
      </button>
      <img src={props.description.src} className={styles.bgImg} alt="img" />
      <div className={styles.description}>
        <h2 className={styles.title}>{props.description.title}</h2>
        <hr style={{width: '90%', margin: 'auto'}} />
        <p className={styles.paragraph}>{props.description.desc}</p>
      </div>
    </div>
  );
};

export default modal;