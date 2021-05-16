import React from "react";
import styles from "../../../styles/Home.module.css";

function HomePage({ header, text, text2, img }) {
  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <p className={styles.text}>{text}</p>
      <br />
      <p className={styles.text}>{text2}</p>
      <img className={styles.img} src={img} alt="fabrikk" />
    </div>
  );
}

export default HomePage;
