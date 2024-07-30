import React from 'react'
import bg3 from "../assets/bg5.jpg"
import styles from "../Styles/Body2.module.css";
import { Link } from 'react-router-dom';

const Body2 = () => {
  return (
    <div>   
      <div className={styles.main}>
      <div  className={styles.backgroundcontainer}>
        <img className={styles.background}src={bg3} />
        </div>
      <div className={styles.content}>
        <p> HI,I AM A FULLSTACK</p>
        <h1>Web Developer</h1>
        {/* <br/> */}
        <Link className={styles.btn} to="/projects">Projects</Link>
        <Link className={`${styles.btnlight} ${styles.btn}`}to="/Contact">Contact</Link>
      
      </div>
    </div>
    </div>
  )
}

export default Body2
