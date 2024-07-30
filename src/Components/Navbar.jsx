import React, { useState } from 'react'
import{FaBars,FaTimes} from "react-icons/fa";
import styles from "../Styles/Navbar.module.css"
import{Link} from "react-router-dom";
const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }

    const[color,setcolor]=useState(false);
    const changecolor=()=>{
    if(window.screenY>=100)
    {
      setcolor(true);
    }
    else{
      setcolor(false);
    }
  }

    window.addEventListener("scroll",changecolor);
  return (
    <div className={color ? `${styles.header} ${styles.headerbg}` : styles.header}>
      <Link to="/"><h1>Portfolio</h1></Link>
      
      <ul className={click ? `${styles.links} ${styles.active}` : styles.links}>
        <li>
            <Link to="Projects">Projects</Link>
        </li>
        <li>
            <Link to="Contact">Contact</Link>
        </li>
        <li>
            <Link to="About">About</Link>
        </li>
  
        </ul>
     
      <div className={styles.hamburger} onClick={handleClick}>
    {click ?(<FaTimes size={20} style={{color:"#fff"}} />) 
    : (<FaBars size={20} style={{color:"#fff"}} />)}
    </div>
  
    </div>
  )
}

export default Navbar
