import React from 'react';

import searchIcon from '../../../assets/images/search.png';
import styles from './SearchBox.module.css';

const searchBox = props => {
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search here" />
      <button><img src={searchIcon} alt="search" /></button>
    </div>
  );
}

export default searchBox;