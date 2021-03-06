import React from "react";
// import styles from "../styles/About.module.css";
import styles from "../styles/Index.module.css";
import Head from "next/head";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import HomePage from "../src/components/homepage/HomePage";
const about = () => {
  return (
    <div>
      <Head>
        <title>Om oss | Stridsbergs & Kvarnstrands</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <body>
        <div className={styles.container}>
          <div className={styles.headerContainer}>
            <HeaderComponent />
          </div>
          <div className={styles.imgContainerAbout}></div>
          <div className={styles.content}>
            <HomePage
              header="Om Kvarnstrands & Stridsbergs"
              text="Stridsbergs Norge A/S startet opp i Oslo 1. januar 1987 som datterselskap av Stridsbergs og Biörck, Trollhättan med 4 ansatte. 
I 1993 ble Stridsbergs Norge A/S et selvstendig selskap. I dag holder vi til i Stange, ca. 1 mil syd for Hamar."
              text2="Historien bak Stridsbergs produkter er ikke glemt, med 18 ansatte gjør vi halvfabrikata om til et ferdig produkt. Dette skal gjøre våre nye og gamle kunder fornøyde på slipeservice og nytt verktøy.
Vi har meget moderne maskinpark som tilfredsstiller markedets mest krevende presisjon og kundens behov. Produktene vi jobber med i dag er sirkelsagblad og båndsagblad i alle dimensjoner. Endret navn til Kvarnstrands & Stridsbergs AS 02. juli 2018 og jobber med å fusjonere Stridsbergs Norge og Kvarnstrands Verktøy "
              img="https://images.eniro.com/covers/stridsbergs-norge-as-84461291-1465810426187?name=large"
            />
          </div>
          <div className={styles.footerContainer}>
            <FooterComponent />
          </div>
        </div>
      </body>
    </div>
  );
};

export default about;
