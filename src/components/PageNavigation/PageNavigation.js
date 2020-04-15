import React from 'react';

import styles from './PageNavigation.module.css';
import prev from '../../assets/images/prev.png';
import next from '../../assets/images/next.png';

const prevBtnClickHandler = props => {
  const currentPage = props.data.page;
  if (currentPage <= 1) {
    return;
  } else {
    props.page(currentPage - 1);
  }
}

const nextBtnClickHandler = props => {
  const currentPage = props.data.page;
  if (currentPage >= props.data.total_pages) {
    return;
  } else {
    props.page(currentPage + 1);
  }
}

const goBtnClickHandler = props => {
  const input = document.querySelector('#goToInput').value;
  const totalPages = props.data.total_pages;
  if (input < 1 || input > totalPages) {
    return;
  } else {
    props.page(input);
  }
}

const pageNavigation = props => {
  let pageNumberlist = [];
  let totalPages = props.data.total_pages;
  if (totalPages >= 7) {
    pageNumberlist.push(
      <li onClick={() => props.page(1)} key="first">First</li>
    );
    for (let i = 1; i <= 3; ++i) {
      pageNumberlist.push(
        <li
          key={i}
          onClick={() => props.page(i)}
          style={props.data.page === i ?
            { fontWeight: '700', color: '#34CEE7' } : {}}>
          {i}
        </li>
      );
    }
    pageNumberlist.push(
      <li
        key="..."
        style={props.data.page > 3 && props.data.page < totalPages - 2 ?
          { fontWeight: '700', color: '#34CEE7' } : {}}>...</li>
    );
    for (let i = totalPages - 2; i <= totalPages; ++i) {
      pageNumberlist.push(
        <li
          key={i}
          onClick={() => props.page(i)}
          style={props.data.page === i ?
            { fontWeight: '700', color: '#34CEE7' } : {}}>
          {i}
        </li>
      );
    }
    pageNumberlist.push(
      <li onClick={() => props.page(totalPages)} key="last">Last</li>
    );
  } else {
    // Movie list pages is less than 7
    for (let i = 1; i < totalPages; ++i) {
      pageNumberlist.push(
        <li key={i} onClick={() => props.page(i)}>{i}</li>
      );
    }
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.goToPage}>
        <input 
          type="number" 
          className={styles.goToInput} 
          id="goToInput" />
        <button 
          className={styles.goToBtn} 
          onClick={() => goBtnClickHandler(props)}>
          Go
        </button>
      </div>
      <div className={styles.container}>
        <button
          className={styles.prev}
          onClick={() => prevBtnClickHandler(props)}>
          <img src={prev} alt="prev" />
        </button>
        <div className={styles.listContainer}>
          <ul>
            {pageNumberlist}
          </ul>
        </div>
        <button
          className={styles.next}
          onClick={() => nextBtnClickHandler(props)}>
          <img src={next} alt="next" />
        </button>
      </div>
      <div className={styles.pageNumber}>
        <div className={styles.currentPage}>
          {props.data.page < 10 ? '0' + props.data.page : props.data.page}
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.totalPages}>{props.data.total_pages}</div>
      </div>
    </div>
  );
}

export default pageNavigation;