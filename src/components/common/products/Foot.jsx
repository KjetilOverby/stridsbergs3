import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";

const Foot = ({ footheader1, footheader2, productImg2, productImg3 }) => {
  return (
    <div className={styles.footContainer}>
      <div className={styles.line}></div>
      <div className={styles.text}>
        <p>Se også:</p>
      </div>
      <div className={styles.product1}>
        <h3>{footheader1}</h3>
        <img className={styles.footImage} src={productImg2} alt="" />
      </div>
      <div className={styles.product2}>
        <h3>{footheader2}</h3>
        <img className={styles.footImage} src={productImg3} alt="" />
      </div>
    </div>
  );
};

export default Foot;
