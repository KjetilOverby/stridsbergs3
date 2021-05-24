import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";

function TextBox({ title, text, header2, text2 }) {
  return (
    <div className={styles.textContainer}>
      <h1 className={styles.headerTextBox}>{title}</h1>
      <p>{text}</p>
      <h4>{header2}</h4>
      <p>{text2}</p>
    </div>
  );
}

export default TextBox;
