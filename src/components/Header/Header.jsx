import React from 'react'
import Categories from '../Categories/Categories'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import UserMenu from '../UserMenu/UserMenu'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className="wrapper">
      <div className={styles.header}>
        <div className="container">
            <div className={styles.header__row}>
                <div className={styles.header__logo}><Logo/></div>
                <div className={styles.header__search}><SearchBar/></div>
                <div className={styles.header__user}><UserMenu/></div>
            </div>
        </div>
    </div>
    <Categories/>
    </div>
  )
}

export default Header