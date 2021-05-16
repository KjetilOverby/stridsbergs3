import React from "react";
import KontaktStartPage from "../src/components/kontakt/KontaktStartPage";
import Head from "next/head";
import styles from "../styles/Kontakt.module.css";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";

function kontakt() {
  return (
    <div>
      <Head>
        <title>Produkter | Stridsbergs & Kvarnstrands</title>
      </Head>
      <body>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <HeaderComponent />
          </div>

          <div className={styles.contentContainer}>
            <KontaktStartPage />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
}

export default kontakt;
