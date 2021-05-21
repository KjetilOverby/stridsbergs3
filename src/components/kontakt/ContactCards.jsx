import React from "react";
import styles from "../../../styles/ContactCards.module.css";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

function ContactCards({ img, name, title, phone, mail }) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.phone}>
        <FiPhone className={styles.icon} />
        {phone}
      </p>
      <a className={styles.mail} href={`mailto:${mail}`}>
        <FiMail className={styles.icon} />
        {mail}
      </a>
    </div>
  );
}

export default ContactCards;
