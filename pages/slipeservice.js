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
              Kvarnstrands Verktygsservice är i dag ett komplett
              slipserviceföretag där du kan få hjälp att skärpa upp alla
              förekommande eggar för trä, aluminium och metallbearbetning. Vi
              täcker in Skåne, Småland, Halland, Bohuslän, Västergötland och
              Östergötland med turbilar som hämtar och lämnar dina varor. På
              Kvarnstrands nöjer vi oss inte med att vara bra utan vi vill
              alltid vara bäst. På service delen investerar vi ständigt i nya
              moderna maskiner men även i det viktigaste, engagerad och duktig
              personal som älskar att leverera service av högsta kvalitet.
              Serviceandan och viljan att hjälpa till gör att vi kan erbjuda
              expressslipningar på de flesta typer av verktyg. Våra turbilar i
              Norge täcker in större delen av landet. Kunder som är belägna
              utanför våra turbilsrutter erbjuder vi externa logistiklösningar.
              Önskar ni hämtning av slipning kan ni fylla i formuläret nedan.
              Tveka aldrig att kontakta oss!
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
