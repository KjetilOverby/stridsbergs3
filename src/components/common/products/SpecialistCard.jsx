import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";

function SpecialistCard({ title, name, tel, mail, profileImg }) {
  return (
    <div className={styles.specialistCardContainer}>
      <h3>{title}</h3>

      <img className={styles.personImg} src={profileImg} alt="" />
      <h2>{name}</h2>
      <p>Tel: {tel}</p>
      <a>Mail: {mail}</a>
    </div>
  );
}

export default SpecialistCard;
