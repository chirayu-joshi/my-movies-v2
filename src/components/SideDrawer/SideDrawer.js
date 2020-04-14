import React from 'react';

import styles from './SideDrawer.module.css';
import SearchBox from '../SearchBox/SearchBox';
import NavItem from '../Navbar/NavItem/NavItem';

const sideDrawer = props => {
  let sideDrawerStyle = styles.sideDrawer;
  if (props.show) {
    sideDrawerStyle = styles.sideDrawerOpen;
  }

  return (
    <React.Fragment>
      <nav className={sideDrawerStyle}>
        <SearchBox />
        <div className={styles.navItems}>
          <NavItem exact to="/">Home</NavItem>
          <NavItem exact to="/trending">Trending</NavItem>
        </div>
        <div className={styles.navItems}>
          <NavItem exact to="/signIn">Sign In</NavItem>
          <NavItem exact to="/signUp">Sign Up</NavItem>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default sideDrawer;