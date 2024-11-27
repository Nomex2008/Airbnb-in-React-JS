import React from 'react'
import styles from './styles.module.scss'
import LinkTo from '../LinkTo/LinkTo'
import globeIcon from './globe.svg'
import navIcon from './nav.svg'

const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
        <div className={styles.userMenu__home}>
            <LinkTo text='Airbnb your home'/>
        </div> 
        <div className={styles.userMenu__local}>
            <LinkTo icon={globeIcon}/>    
        </div>
         <div className={styles.userMenu__user}>
            <button className={styles.account}>
                <div className={styles.account__navIcon}>
                    <img src={navIcon} alt="" />
                </div>
                <div className={styles.account__avatar}>
                    <img src="./img/icons/user-avatar.svg" alt="" />
                </div>
            </button>
         </div>
    </div>
  )
}

export default UserMenu