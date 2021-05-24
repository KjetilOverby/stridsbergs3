import React from "react";
import Head from "next/head";
import styles from "../styles/Produkter.module.css";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import ProdukterStartPage from "../src/components/produkter/ProdukterStartPage";
import Produkter2StartPage from "../src/components/produkter2/Produkter2StartPage";

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
          <div className={styles.head}>
            <h1>Produkter</h1>

            <p>
              Som en av Norges ledende leverandører av skjærende verktøy til
              sagbruksindustrien har vi bred kunnskap innenfor området. I vårt
              produktsortiment finner du blandt annet Kanefusa som er verdens
              ledende produsent av sagblader. Vi driver med kontinuerlig
              utvikling mot kundens spesifikke behov og forutsetninger. Vi
              skaffer Det meste av skjærende verktøy og rekvisita til deres
              maskiner.
            </p>
          </div>
          <div className={styles.imageContainer}></div>

          <div className={styles.contentContainer}>
            <Produkter2StartPage />
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
