import React from "react";
import styles from "../../../styles/KontaktStartPage.module.css";

function KontaktInfo() {
  return (
    <div className={styles.kontaktInfoContainer}>
      <h1 className={styles.header}>Kvarnstrands & Stridsbergs AS</h1>
      <h3 className={styles.kontaktInfo}>Tlf: 952 36 882</h3>
      <h3 className={styles.kontaktInfo}>
        Epost: <a href="mailto:post@stridsberg.no">post@stridsberg.no</a>{" "}
      </h3>
      <h3 className={styles.kontaktInfo}>
        Adresse: Stensrudveien 1 - 2335 Stange{" "}
      </h3>
    </div>
  );
}

export default KontaktInfo;
