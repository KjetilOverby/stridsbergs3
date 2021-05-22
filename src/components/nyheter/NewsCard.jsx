import React from "react";
import styles from "../../../styles/NewsCard.module.css";
import Link from "next/link";

const NewsCard = ({ title, img, text, dato, goTo }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>{title}</h1>
      <p className={styles.dato}>{dato}</p>
      <img className={styles.img} src={img} alt="investeringer" />
      <p className={styles.text}>{text}</p>
      <Link href={`${goTo}`}>
        <button className={styles.button}>Les mer</button>
      </Link>
    </div>
  );
};

export default NewsCard;
