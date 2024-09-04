import React from 'react'
import styles from "../Styles/AboutContent.module.css"
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className={styles.about}>
      <div className={styles.left}>
        <h1>Who Am I?</h1>
        <p>I am a Full Stack Web Developer. I Create
            responsive websites.
        </p>
        <Link to="/contact">
        <button className={styles.btn}>Contact</button>
            </Link>
        <div className={styles.skills}>
            
        </div>
      </div>
     
    </div>
  )
}

export default AboutContent
