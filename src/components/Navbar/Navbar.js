import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/play.png';
import styles from './Navbar.module.css';
import NavItem from './NavItem/NavItem';
import SearchBox from './SearchBox/SearchBox';

const navbar = props => {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.logoLink}>
        <img
          src={logo}
          href="home logo"
          className={styles.logo}
          alt="Logo" />
      </Link>
      <div className={styles.navItems}>
        <NavItem exact to="/">Home</NavItem>
        <NavItem exact to="/trending">Trending</NavItem>
      </div>
      <SearchBox />
      <div
        className={styles.navItems}
        style={{ position: 'absolute', right: 0, paddingRight: '20px' }}>
        <NavItem to="/">Sign In</NavItem>
        <NavItem to="/">Sign Up</NavItem>
      </div>
    </nav>
  );
}

export default navbar;