import React from "react"
import styles from "../Styles/Form.module.css";
const Form = () => {
  return (
    <div className={styles.form}>
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="Email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Ypur message Here"></textarea>
      <button className={styles.btn}>Submit</button>
      </form>
    </div>
  )
}

export default Form
