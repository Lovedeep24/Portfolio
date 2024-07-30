import styles from "../Styles/WorkCard.module.css"
import React from 'react'
import project1 from"../assets/project1.jpg"
import { NavLink } from "react-router-dom"
const WorkCard = (props) => {
  return (
    <div className={styles.projectCard}>
    <img src={props.imgsrc} alt="image"></img>
    <h2 className={styles.projectTitle}>{props.title}</h2>
    <div className={styles.proDetails}>
        <p> {props.text} </p>
        <div className={styles.proBtns}>
            <NavLink to={props.view} className={styles.btn}>View</NavLink>
            <NavLink to={props.source} className={styles.btn}>Source</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard
