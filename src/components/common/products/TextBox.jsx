import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";

function TextBox({ title, text }) {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.headerTextBox}>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default TextBox;
