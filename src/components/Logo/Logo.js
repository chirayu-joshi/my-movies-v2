import React from 'react';
import { Link } from 'react-router-dom';

import icon from '../../assets/images/play.png';
import styles from './Logo.module.css';

const logo = props => (
  <Link to={props.to}>
    <img
      src={icon}
      href="home logo"
      className={styles.logo}
      alt="Logo" />
  </Link>
);

export default logo;
