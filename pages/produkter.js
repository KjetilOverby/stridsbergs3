import React from "react";
import Head from "next/head";
import styles from "../styles/Produkter.module.css";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import ProdukterStartPage from "../src/components/produkter/ProdukterStartPage";

function produkter() {
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
          <h1 className={styles.head}>Produkter</h1>
          <div className={styles.imageContainer}></div>
          <div className={styles.contentContainer}>
            <ProdukterStartPage />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
}

export default produkter;
