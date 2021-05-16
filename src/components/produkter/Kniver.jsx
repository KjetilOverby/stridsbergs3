import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function Kniver() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Kniver</h2>
        <h3>Motstål - Huggkniver - Reduserkniver - Rillestål</h3>

        <p>
          Vi har egen knivsliper slik at vi kan møte våre kunders behov for
          slipeservice av kniver. Vi sliper kniver inntil 2600mm lengde. Kontakt
          oss for mere info og pris - vi kan hjelpe dere med det meste.
        </p>
      </div>
      <img
        className={styles.img}
        src="https://i.ytimg.com/vi/DUTVpM1hZ50/maxresdefault.jpg"
        alt=""
      />
    </div>
  );
}

export default Kniver;
