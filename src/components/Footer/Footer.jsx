import React from 'react'
import styles from './styles.module.scss'
import arrowTop from '/img/icons/arrow-top.svg'
import globeBlack from '/img/icons/globe-black.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer__body}>

          <ul className={styles.footer__left}>
            <li className={styles.leftItem}>© 2023 Airbnb, Inc.</li>
            <li className={styles.leftItem}>Terms</li>
            <li className={styles.leftItem}>Sitemap</li>
            <li className={styles.leftItem}>Privacy</li>
            <li className={styles.leftItem}>Your Privacy Choices</li>
          </ul>

          <ul className={styles.footer__right}>
            <li className={styles.rightItem}>
              <img className={styles.rightItem__mar} src={globeBlack} alt="" />
              English (US)</li>
            <li className={styles.rightItem}><span className={styles.rightItem__mar}>$</span>USD</li>
            <li className={styles.rightItem}>Support & resources</li>
            <li className={styles.rightItem}>
              <img src={arrowTop} alt="" />
            </li>
          </ul>

          </div>
      </div>
    </div>
  )
}

export default Footer