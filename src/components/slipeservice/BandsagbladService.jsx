import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function BandsagbladService() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Båndsagblad</h2>

        <p>
          Kvarnstrands & Stridsbergs Norge A/S har ett automatisk rettesenter
          som planerer, strekker og retter båndsdagblad med stor nøyaktighet.
          Helautomatisk pålegg av stellit, som er høylegert verktøystål. Dette
          er noe som øker standtiden betraktelig.
        </p>
      </div>
      <img
        className={styles.img}
        src="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/1441800845794.jpg&w=682&h=400"
        alt=""
      />
    </div>
  );
}

export default BandsagbladService;
