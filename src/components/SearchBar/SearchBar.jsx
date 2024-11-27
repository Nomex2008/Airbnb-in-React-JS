import React from 'react';
import styles from './styles.module.scss';
import searchIcon from './search.svg';
import LinkTo from '../LinkTo/LinkTo';

const SearchBar = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles['searchbar__btns-wrapper']}>

        <div className={styles.searchbar__btn}>
          <LinkTo text='Anywhere'/>
        </div>
        <div className={styles.searchbar__btn}>
          <LinkTo text='Any week'/>
        </div>
        <div className={styles.searchbar__btn}>
          <LinkTo text='Add guests' style='light'/>
        </div>
      </div>
      <button className={styles['searchbar__btn-search']}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
