import React from "react";
import styles from "../../../styles/Sirkelsagblad.module.css";

function Sirklesagblad() {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.header}>Sirkelsagblad</h2>
        <h3>Små og store hardmetallblad:</h3>
        <ul>
          <li>Kløyvsagblad</li>
          <li>Kapp, justersagblad</li>
          <li>Bygg, elhandsagblad</li>
          <li>Kantsagblad</li>
        </ul>
        <h3>Hardmetall sagblad</h3>
        <ul>
          <li>Forskjærende/Reduserringer</li>
          <li>Kløyvsagblad</li>
          <li>Delingssagblad</li>
          <li>Kantsagblad</li>
        </ul>
        <h3>Stellitsagblad</h3>
        <ul>
          <li>Forskjærende/Reduserringer</li>
          <li>Kløyvsagblad</li>
          <li>Delingssagblad</li>
          <li>Kantsagblad</li>
        </ul>
      </div>
      <img
        className={styles.img}
        src="https://www.omegasonics.com/wp-content/uploads/2018/06/013_Omegasonics_Blog_1000x772-Clean-Your-Saw-Blades-with-Ultrasonic-Saw-Blade-Cleaning.jpg"
        alt=""
      />
    </div>
  );
}

export default Sirklesagblad;
