import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function Servicerute() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Servicerute</h2>
        <h4>Servicerute kjører hver 14.dag i følgende områder:</h4>

        <ul>
          <li>Ringerike/Oppland</li>
          <li>Sør-Trøndelag</li>
          <li>Telemark/Vestfold/Buskerud</li>
          <li>Akershus/Østfold</li>
          <li>Standtid</li>
          <li>Gudbrandsdalen</li>
          <li>Sørlandet/Vestfold</li>
        </ul>
        <h4>Ring oss for nærmere informasjon: 95 23 68 82</h4>
        <h4 style={{ marginTop: "-1rem" }}>
          eller vår sjåfør Bjørn: 91 11 66 22
        </h4>
      </div>
      <img
        className={styles.img}
        src="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/IMG_20170706_050142_edited.jpg&h=1201&w=2761"
        alt=""
      />
    </div>
  );
}

export default Servicerute;
