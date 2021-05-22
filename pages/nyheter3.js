import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import ProduktWrapper from "../src/components/common/products/ProduktWrapper";
import Iframe from "react-iframe";
import styles from "../styles/NyheterFrontPage.module.css";

const nyheter3 = () => {
  return (
    <div>
      <Iframe
        url="https://www.kvarnstrands.com/media/1816/artikkel-i-treindustrin-04-2018.pdf"
        id="myId"
        className={styles.iframe3}
        display="initial"
        position="relative"
      />
    </div>
  );
};

export default nyheter3;
