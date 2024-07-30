import React from 'react';
import styles from "../Styles/Work.module.css";
import WorkCard from './WorkCard';
import ProjectCardData from './WorkCardData';
const Work = () => {
  return (
    <div className={styles.workContainer}>
        <h1 className={styles.projectHeading}>Projects</h1>
        <div className={styles.projectContainer}>
           {ProjectCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}/>
            );
           })}
        </div>
    </div>
  )
}

export default Work
