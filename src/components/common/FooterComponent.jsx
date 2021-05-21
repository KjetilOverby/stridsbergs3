import React from "react";
import styles from "../../../styles/Footer.module.css";

function FooterComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.firstSubContainer}>
          <h1 className={styles.header}>Kvarnstrands & Stridsbergs AS</h1>
          <p className={styles.headerText}>Stensrudvegen 1</p>
          <p className={styles.headerText}>2335 Stange</p>
          <br />
          <p className={styles.headerText}>Tel: 952 36 882</p>
          <p className={styles.headerText}>Email: post@stridsbergs.no</p>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.firstSubContainer}>
          <h1 className={styles.header}>Åpningstider</h1>
          <h3 className={styles.subheader}>Verksted:</h3>
          <p className={styles.headerText}>mandag - torsdag: 07:00 - 16:00</p>
          <p className={styles.headerText}>fredag: 07:00 - 13:00</p>
          <h3 className={styles.subheader2}>Administrasjon:</h3>
          <p className={styles.headerText}>mandag - torsdag: 08:00 - 16:00</p>
          <p className={styles.headerText}>fredag: 08:00 - 13:00</p>
        </div>
      </div>
      <div className={styles.thirdContainer}>
        <img
          className={styles.logo}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fXiI7_HzVyk9l0H85KMJVtoKnh3Y-f7E2CZPZ40uusS5CQtZAbm0XURt86EnZVvRthOWce5ZNLFq6LNo7xSUPFlctVVGCAAUxXkrUTYVRF7Ptgv9pDNfPtB85OSEsBCDLWZL-SBbJFmKf45lOy3NS4=w1191-h258-no?authuser=0"
          alt=""
        />
        <p className={styles.orgnr}>Org.nr: NO982734347MVA</p>
      </div>
    </div>
  );
}

export default FooterComponent;
