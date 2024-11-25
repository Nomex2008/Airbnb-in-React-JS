import React from 'react';
import styles from './styles.module.scss';
import searchIcon from './search.svg';

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles['searchbar__btns-wrapper']}>
        <button className={styles.searchbar__btn}>Anywhere</button>
        <button className={styles.searchbar__btn}>Any week</button>
        <button className={styles.searchbar__btn}>Add guests</button>
      </div>
      <button className={styles['searchbar__btn-search']}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
