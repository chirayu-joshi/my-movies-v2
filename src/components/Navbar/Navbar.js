import React from 'react';

import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import NavItem from './NavItem/NavItem';
import SearchBox from '../SearchBox/SearchBox';
import DrawerToggleButton from '../DrawerToggleButton/DrawerToggleButton';

const navbar = props => (
  <nav className={styles.navigation}>
    <Logo to="/" />
    <div className={styles.navItems}>
      <NavItem exact to="/">Home</NavItem>
      <NavItem exact to="/trending">Trending</NavItem>
    </div>
    <div className={styles.responsive}>
      <SearchBox />
    </div>
    <div className={styles.spacer}></div>
    <div
      className={styles.navItems}>
      <NavItem exact to="/signIn">Sign In</NavItem>
      <NavItem exact to="/signUp">Sign Up</NavItem>
    </div>
    <div className={styles.drawer}>
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  </nav>
);

export default navbar;