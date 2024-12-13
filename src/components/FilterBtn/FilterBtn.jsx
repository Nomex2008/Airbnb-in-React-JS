import React from 'react'
import filterIcon from './filters.svg'
import styles from './styles.module.scss'

const FilterBtn = () => {
  return (
    <button className={styles.filterBtn}>
        <img src={filterIcon} alt="filter" />
        Filters
    </button>
  )
}

export default FilterBtn