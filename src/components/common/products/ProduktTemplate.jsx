import React from "react";
import styles from "../../../../styles/ProduktTemplate.module.css";
import Foot from "./Foot";
import ProduktImage from "./ProduktImage";
import SpecialistCard from "./SpecialistCard";
import TextBox from "./TextBox";

function ProduktTemplate({
  title,
  name,
  tel,
  mail,
  header,
  text,
  productImg,
  footheader1,
  footheader2,
  productImg2,
  productImg3,
  profileImg,
}) {
  return (
    <div className={styles.container}>
      <SpecialistCard
        title={title}
        name={name}
        tel={tel}
        mail={mail}
        profileImg={profileImg}
      />
      <TextBox title={header} text={text} />
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
