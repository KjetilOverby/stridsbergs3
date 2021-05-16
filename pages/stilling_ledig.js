import React from "react";
import styles from "../styles/Aktuelt.module.css";
import Head from "next/head";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import StillingLedigStartPage from "../src/components/stillingledig/StillingLedigStartPage";

function stilling_ledig() {
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
            <StillingLedigStartPage />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
}

export default stilling_ledig;
