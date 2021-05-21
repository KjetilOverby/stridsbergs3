import React from "react";
import styles from "../../../../styles/ProduktWrapper.module.css";

function ProduktWrapper({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default ProduktWrapper;
