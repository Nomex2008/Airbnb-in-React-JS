import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import FilterBtn from '../FilterBtn/FilterBtn'
import styles from './styles.module.scss'
import categoriesData from './../../data/categoriesData.json'

const Categories = () => {
  //console.log(categoriesData)
  
  return (
    <div className={styles.categories}>
        <div className="container">
            <div className={styles.categories__row}>
                <div className={styles.categories__list}>
                  {categoriesData.map((cat) => {
                    return(
                      <CategoryItem
                      key={cat.title}
                      title={cat.title}
                      img={cat.img}
                      />
                    )
                  })}
                  </div>
                <div className={styles.categories__filter}>
                  <FilterBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories