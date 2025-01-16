import React from 'react'
import Card from '../Card/Card'
import styles from './styles.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.main__cards}>
          <Card/>
        </div>
      </div>
    </main>
  )
}

export default Main