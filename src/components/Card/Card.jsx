import React from 'react'
import styles from './styles.module.scss'
import starIcon from './star.svg'

const Card = () => {
  return (
    <article className={styles.card}>
        <img src="./img/objects/01.jpg" srcSet='./img/objects/01@2x.jpg 2x' 
        alt="" 
        className={styles.img}/>

        <div className={styles.descWrapper}>

            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Title</h3>
                <div className={styles.rating}>
                  <img src={starIcon} alt="" />
                  5.0
                </div>
            </div>

            <p className={styles.desc}>Desc</p>

            <p className={styles.data}>Data</p>

            <p className={styles.price}>
              <strong>$388</strong> night
            </p>
            
        </div>
    </article>
  )
}

export default Card;