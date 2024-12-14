import React from 'react'
import styles from './styles.module.scss'

const CategoryItem = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.img}>
            <img src="img/categories/01.svg" alt="Cat name" />
        </div>
        <div className={styles.title}>Category name</div>
    </div>
  )
}

export default CategoryItem