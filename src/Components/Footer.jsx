import React from 'react'
import styles from "../Styles/Footer.module.css"
import{FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 
"react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.left}>
          <div className={styles.location}>
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
          
          <div>
            <p>253 sector-18</p>
            <p>Kaitha,Haryana</p>
            <p>India</p>
          </div>
          </div>
          <div className={styles.phone}>
         <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 8295035820</h4>
          </div>
          <div className={styles.gmail}>
         <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>lovedeep24253@gmail.com</h4>
          </div>
        </div>
        <div className={styles.right}>
          <h4>Social Media Handles</h4>
          <div className={styles.social}>
          <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/>lovedeep24253@gmail.com
          <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/>lovedeep24253@gmail.com
          <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>lovedeep24253@gmail.com
          </div>
          </div>
          </div>
        </div>

  )
}

export default Footer
