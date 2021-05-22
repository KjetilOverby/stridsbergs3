import React from "react";
import styles from "../../../styles/StandardLayout.module.css";

function StandardLayout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default StandardLayout;
