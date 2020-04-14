import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.css';

const navItem = props => (
  <NavLink
    {...props}
    className={styles.navItem}
    activeStyle={{ fontWeight: '900' }}>
    {props.children}
  </NavLink>
);

export default navItem;