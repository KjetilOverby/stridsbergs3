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
              Som en av Sveriges och Norges ledande leverantörer av produkter
              och service mot sågverk har vi en otroligt bred kunskap inom
              området. I vårt produktsortiment finner ni bland annat Kanefusa
              som är världens ledande producent av sågklingor. Vår erfarenhet av
              optimering och inställningar av såglinjer gör oss till den
              ultimata samarbetspartnern inom området. Vi sysslar med
              kontinuerlig utveckling mot er som kunds specifika behov och
              förutsättningar. Hos oss finner ni allt ifrån sågklingor, huggstål
              till personal som kan komma till just er och rikta upp och
              förbättra er såglinje. Kontakta oss gärna för mer information!
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
