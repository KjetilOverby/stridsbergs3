import React from "react";
import styles from "../../../styles/Slipeservice2StartPage.module.css";
import Slipeservice2Card from "./Slipeservice2Card";

function Slipeservice2StartPage() {
  return (
    <div className={styles.container}>
      <Slipeservice2Card
        header="Sirkelsagblad"
        img="https://lh3.googleusercontent.com/pw/ACtC-3c5JwPbg8Hnj_390w8J-mcXP-l2a6u-y3o8S-FNcUJIXI-oTFhYwQzeDIVwHRlmOFhWGhJ0dfAHMdQwYjqj6PnExHWT3x9EfID74GapHdgeRN3uv6y9HtL2_Ex5OS9F44ZV--Obko4sPYOffg6Tnnw=w1440-h1080-no?authuser=0"
        text={
          <>
            <h3>Skreddersyr etter ønsker og behov</h3>
            <ul>
              <li>Tilpasser</li>
              <li>Problemløsere</li>
              <li>Finish</li>
              <li>Standtid</li>
              <li>Klyvsagblad</li>
              <li>Kappsagblad</li>
            </ul>
          </>
        }
      />
      <Slipeservice2Card
        header="Båndsagblad"
        img="https://admin.mekke.no/thumbnail.php?img=/data/images/2575/1441800845794.jpg&w=682&h=400"
        text={
          <>
            <p>
              Kvarnstrands & Stridsbergs Norge A/S har ett automatisk
              rettesenter som planerer, strekker og retter båndsdagblad med stor
              nøyaktighet. Helautomatisk pålegg av stellit, som er høylegert
              verktøystål. Dette er noe som øker standtiden betraktelig.
            </p>
          </>
        }
      />
      <Slipeservice2Card
        header="Kniver"
        img="https://lh3.googleusercontent.com/pw/ACtC-3cW3ZBHYb4m7VsjYDc8JClDj46kPpLaqO1ucK1bmbT5jgHrnO8Tmei3PSXq4uOysfWi8PZ6BS_2usCkaxMPbV8IHdeJa9w33Nm-_qqXJ9_9YygRvMDaEAtxg3GKrJFtcx_6Yj5FmYPVV4EIvKMb-y0=w1440-h1080-no?authuser=0"
        text={
          <>
            <h3>Motstål - Huggkniver - Reduserkniver - Rillestål</h3>
            <p>
              Vi har egen knivsliper slik at vi kan møte våre kunders behov for
              slipeservice av kniver. Vi sliper kniver inntil 2600mm lengde.
              Kontakt oss for mere info og pris - vi kan hjelpe dere med det
              meste.
            </p>
          </>
        }
      />
      <Slipeservice2Card
        header="fres"
        img="https://www.kvarnstrands.com/media/1860/window-tools_9.jpg?width=318&height=212"
        text={
          <p>
            Vi tillverkar fräsar med olika typer av bestyckningsmaterial och
            slipningar. Vad som är lämpligast beror helt och hållet på vad ni
            ska köra. På Kvarnstrands Verktyg har vi tillverkat hyvelverktyg
            sedan 1939 och har skaffat oss en otroligt bred kunskap som har
            byggts upp och förbättrats genom generationer. I kategorierna nedan
            finner ni information om de olika slip och bestyckningsvarianterna
          </p>
        }
      />
      <Slipeservice2Card
        header="Servicebil"
        img="https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        text={
          <>
            <h3>Servicerute kjører hever 14. dag i følgende områder:</h3>
            <ul>
              <li>Ringerike/Oppland</li>
              <li>Sør-Trøndelag</li>
              <li>Telemark/Vestfold/Buskerud</li>
              <li>Akershus/Østfold</li>
              <li>Gudbrandsdalen</li>
              <li>Sørlandet/Vestfold</li>
            </ul>
            <p>
              Ring oss for nærmere informasjon: 95 23 68 82, eller vår sjåfør
              Bjørn: 91 11 66 22
            </p>
          </>
        }
      />
    </div>
  );
}

export default Slipeservice2StartPage;
