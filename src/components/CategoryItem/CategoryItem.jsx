import React from 'react'
import styles from './styles.module.scss'

const CategoryItem = ({title, img}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.img}>
            <img src={`img/categories/${img}`} alt="Cat name" />
        </div>
        <div className={styles.title}>{title}</div>
    </div>
  )
}

export default CategoryItem;