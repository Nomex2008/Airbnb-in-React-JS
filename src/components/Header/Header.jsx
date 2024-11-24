import React from 'react'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
        <div className="container">
            <div className={styles.header__row}>
                <div className={styles.header__logo}><Logo/></div>
                <div className={styles.header__search}><SearchBar/></div>
                <div className={styles.header__user}>user menu</div>
            </div>
        </div>
    </div>
  )
}

export default Header