import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";
import Foot from "./Foot";
import ProduktImage from "./ProduktImage";
import SpecialistCard from "./SpecialistCard";
import TextBox from "./TextBox";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

function ProduktTemplate({
  title,
  name,
  tel,
  mail,
  header,
  text,
  header2,
  text2,
  productImg,
  footheader1,
  footheader2,
  productImg2,
  productImg3,
  profileImg,
}) {
  return (
    <div className={styles.container}>
      <Link href="/produkter">
        <p className={styles.back}>
          <BsArrowLeftShort className={styles.icon} /> Til produkter
        </p>
      </Link>
      <SpecialistCard
        title={title}
        name={name}
        tel={tel}
        mail={mail}
        profileImg={profileImg}
      />
      <TextBox title={header} text={text} header2={header2} text2={text2} />
      <ProduktImage img={productImg} />
      <Foot
        footheader1={footheader1}
        footheader2={footheader2}
        productImg2={productImg2}
        productImg3={productImg3}
      />
    </div>
  );
}

export default ProduktTemplate;
