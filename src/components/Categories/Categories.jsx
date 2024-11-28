import React from 'react'
import styles from './styles.module.scss'

const Categories = () => {
  return (
    <div className={styles.categories}>
        <div className="container">
            <div className={styles.categories__row}>
                <div className={styles.categories__list}>List</div>
                <div className={styles.categories__filter}>Filter</div>
            </div>
        </div>
    </div>
  )
}

export default Categories