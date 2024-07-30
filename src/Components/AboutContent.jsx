import React from 'react'
import styles from "../Styles/AboutContent.module.css"
import { Link } from 'react-router-dom'
import reactimg from "../assets/react.jpg"
const AboutContent = () => {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <h1>Who Am I?</h1>
        <p>I am a Full Stack Web Developer.I Create a
            responsive websites.
        </p>
        <Link to=".contact">
        <button className={styles.btn}>Contact</button>
            </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.imageContainer}>
            <div className={styles.imagesStackTop}>
                <img src={reactimg} className={styles.img}></img>
            </div>
            <div className={styles.imagesStackBottom}>
                <img src={reactimg} className={styles.img1}></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
