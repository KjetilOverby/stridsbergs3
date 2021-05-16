import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import Head from "next/head";
import SlipeServiceStartpage from "../src/components/slipeservice/SlipeServiceStartpage";
import styles from "../styles/Produkter.module.css";

function slipeservice() {
  return (
    <div>
      <Head>
        <title>Slipeservice | Stridsbergs & Kvarnstrands</title>
      </Head>
      <body>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <HeaderComponent />
          </div>
          <h1 className={styles.head}>Slipeservice</h1>
          <div className={styles.imageContainerService}></div>
          <div className={styles.contentContainer}>
            <SlipeServiceStartpage />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
}

export default slipeservice;
