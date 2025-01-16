import React from 'react'
import styles from './styles.module.scss'

const Card = () => {
  return (
    <article className={styles.card}>
        <img src="./img/objects/01.jpg" srcSet='./img/objects/01@2x.jpg 2x' 
        alt="" 
        className={styles.img}/>

        <div className={styles.descWrapper}>
            <div className={styles.titleWrapper}>
                <h3 className={styles.title}>Title</h3>
                <div className={styles.rating}>Rating</div>
            </div>

            <p className={styles.desc}>Desc</p>

            <p className={styles.data}>Data</p>

            <p className={styles.price}>PRICE</p>
        </div>
    </article>
  )
}

export default Card;