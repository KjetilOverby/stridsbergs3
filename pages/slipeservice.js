import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import Head from "next/head";
import SlipeServiceStartpage from "../src/components/slipeservice/SlipeServiceStartpage";
import styles from "../styles/Produkter.module.css";
import Slipeservice2StartPage from "../src/components/slipeservice2/Slipeservice2StartPage";

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
          <div className={styles.head}>
            <h1>Slipeservice</h1>
            <p>
              Kvarnstrands & Stridsbergs er i dag ett komplett slipeservicefirma
              som sliper verktøy for tre, aluminium og metallbearbeiding. Samt
              retting og omlodding av blader. Vi har service bil som leverer og
              henter hver 14. dag over hele landet. Vi jobber hele tiden på å
              være best på vårt felt, vi er stadig under utvikling for å få til
              dette og vi investerer i moderne maskiner og utstyr som trengs.
              Med våres dyktige ansatte så har vi kompetanse og erfaring til å
              være blandt de beste.
            </p>
            <p>
              Ta kontakt med oss og få en faglig vurdering på service av ditt
              verktøy
            </p>
          </div>
          <div className={styles.imageContainerService}></div>
          <div className={styles.contentContainer}>
            <Slipeservice2StartPage />
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
