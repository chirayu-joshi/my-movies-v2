import React from 'react';
import { Link } from 'react-router-dom';

import styles from './PathNotFound.module.css';
import sadFace from '../../assets/images/sad_face.png';

const pathNotFound = props => {
  return (
    <div className={styles.container}>
      <img src={sadFace} alt="sad face" className={styles.sadFace} />
      <h1 className={styles.mainHeading}>404</h1>
      <h2 className={styles.title}>Oops, we couldn't find this path...</h2>
      <h3 className={styles.subtitle}>Back to <Link to="/">home</Link></h3>
    </div>
  );
}

export default pathNotFound;