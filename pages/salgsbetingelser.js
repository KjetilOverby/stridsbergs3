import React from "react";
import Head from "next/head";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import Salgbetingelser from "../src/components/aktuelt/Salgbetingelser";
import styles from "../styles/Aktuelt.module.css";

function salgsbetingelser() {
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
            <Salgbetingelser />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
}

export default salgsbetingelser;
