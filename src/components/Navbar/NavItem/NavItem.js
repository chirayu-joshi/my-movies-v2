import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.css';

const navItem = props => {
  return (
    <NavLink 
      to={props.to} 
      className={styles.navItem}>
      {props.children}
    </NavLink>
  );
}

export default navItem;