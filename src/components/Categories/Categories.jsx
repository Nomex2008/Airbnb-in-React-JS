import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import FilterBtn from '../FilterBtn/FilterBtn'
import styles from './styles.module.scss'

const Categories = () => {
  return (
    <div className={styles.categories}>
        <div className="container">
            <div className={styles.categories__row}>
                <div className={styles.categories__list}><CategoryItem/></div>
                <div className={styles.categories__filter}>
                  <FilterBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories