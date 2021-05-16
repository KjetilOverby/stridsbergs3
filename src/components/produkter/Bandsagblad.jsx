import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function Bandsagblad() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Båndsagblad</h2>
        <p>
          Stridsbergs Norge AS er forhandler av Uddeholm båndsagblader. Dette er
          båndsagblader som dekker de fleste behov
        </p>

        <h3>Mest brukte kvaliteter:</h3>
        <p>
          1450, ca 44HRC - er mest egnet for stukbånd, men det kan også
          stellitiseres
        </p>
        <p>1600, ca 47HRC - stuk og stellitbånd.</p>
        <p>1670, ca 49HRC - Stellitbånd, Hardere kvalitet</p>
      </div>
      <img
        className={styles.img}
        src="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/1441803629916.jpg&w=682&h=400"
        alt=""
      />
    </div>
  );
}

export default Bandsagblad;
