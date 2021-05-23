import React from "react";
import styles from "../../../styles/Slipeservice2Card.module.css";

function Slipeservice2Card({ header, img, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}></div>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.textContainer}>
        <h1 className={styles.header}>{header}</h1>
        <div>{text}</div>
      </div>
    </div>
  );
}

export default Slipeservice2Card;
