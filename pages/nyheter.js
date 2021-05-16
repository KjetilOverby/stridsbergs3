import React from "react";
import styles from "../styles/Aktuelt.module.css";
import Head from "next/head";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import NyheterStartPage from "../src/components/nyheter/NyheterStartPage";

const nyheter = () => {
  return (
    <div>
      <Head>
        <title>Salgsbetingelser | Stridsbergs & Kvarnstrands</title>
      </Head>
      <body>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <HeaderComponent />
          </div>

          <div className={styles.contentContainer}>
            <NyheterStartPage />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
};

export default nyheter;
