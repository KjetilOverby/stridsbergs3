import React from "react";
import styles from "../../../styles/NewsCard.module.css";

const NewsCard = ({ title, img, text, dato }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <p>{dato}</p>
      <img className={styles.img} src={img} alt="investeringer" />
      <p>{text}</p>
      <button>Les mer</button>
    </div>
  );
};

export default NewsCard;
