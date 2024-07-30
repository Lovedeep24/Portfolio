import styles from "../Styles/HeroImage.module.css";
import React, { Component } from 'react'

class HeroImage2 extends Component{
    render(){
        return (
            <div className={styles.heroImg}>
                <div className={styles.heading}>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
          
            </div>
          )
    }
  
}

export default HeroImage2
