import React from 'react';

import styles from './LoadingAnimation.module.css';

const loadingAnimation = props => (
  <div className={styles.loaderContainer}>
    <div className={styles.loaderLeft}></div>
    <div className={styles.loader}></div>
    <div className={styles.loaderRight}></div>
  </div>
);

export default loadingAnimation;