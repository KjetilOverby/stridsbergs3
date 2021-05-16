import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function ServiceSagblad() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Sirkelsagblad</h2>
        <h3>Skreddersyr etter ønsker og behov</h3>

        <ul>
          <li>Tilpasser</li>
          <li>Problemløsere</li>
          <li>Kompetanse</li>
          <li>Finish</li>
          <li>Standtid</li>
          <li>Klyvsagblad</li>
          <li>Kappsagblad</li>
        </ul>
      </div>
      <img
        className={styles.img}
        src="https://lh3.googleusercontent.com/pw/ACtC-3c5JwPbg8Hnj_390w8J-mcXP-l2a6u-y3o8S-FNcUJIXI-oTFhYwQzeDIVwHRlmOFhWGhJ0dfAHMdQwYjqj6PnExHWT3x9EfID74GapHdgeRN3uv6y9HtL2_Ex5OS9F44ZV--Obko4sPYOffg6Tnnw=w1440-h1080-no?authuser=0"
        alt=""
      />
    </div>
  );
}

export default ServiceSagblad;
