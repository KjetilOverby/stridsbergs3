import React from "react";
import styles from "../../../styles/Aktuelt.module.css";

function NyheterStartPage() {
  return (
    <div className={styles.newsContainer}>
      <h1 className={styles.nHeader}>Kvarnstrands overtar Stridsbergs Norge</h1>
      <h4 className={styles.nSubheader}>
        2011.08.18 Kvarnstrands Verktyg AB har kjøpt Stridsbergs Norge AS og
        øker dermed sin virksomhet i Norge. – Vi kan nå tilby våre kunder innen
        tre, aluminium og metallbearbeidning ett komplett program når det
        gjelder service, verktøy, utdanning og optimalisering, heter det i en
        pressemelding fra Kvarnstrands.
      </h4>
      <div className={styles.nImg}>
        <img
          className={styles.nImg}
          src="https://lh3.googleusercontent.com/pw/ACtC-3cRDY73ltjUINU-eKC8r-oOdZGRgvAPUZsBVYK67mhwewBXTCez-0c6C1H20RghJdiog27SBEIyV7tF_yl8FXAbFpAxDEbJr_v-i_gCQE-yuHJP-lcKbE2t18DhIw5lSvJBzIQ4hpNCKcNgdUEN-m4c=w460-h311-no?authuser=0"
          alt=""
        />
        <p className={styles.nImgText}>
          Fornøyde parter etter Kvarnstrands overtagelse av Stridsbergs. Fra
          venstre står Tore Djerv, administrerende direktør Kvarnstrands Verktøy
          Norge, Peter Hesseborn, administrerende direktør Stridsberg Norge,Jan
          Hesseborn, Stridsbergs Norge, Christer Hesseborn, Stridsbergs Norge og
          David Kvarnstrand, VD Kvarnstrands Vertyg AB. (Foto: Kvarnstrands)
        </p>
      </div>
      <div className={styles.nText}>
        <p className={styles.pText}>
          Kvarnstrands Verktyg AB har eksistert siden 1945 og har egne
          virksomheter i Sverige, Norge og Finland. Selskapet etablerte seg i
          Norge i 1998 gjennom oppkjøp av Kværner Mesnas produksjon av massive
          høvelverktøy. Kvarnstrands Verktyg AB er en verdensledende produsent
          og innovatør av høvelverktøy og har et komplett produktprogram for all
          skjærende trebearbeiding. Foretaket har totalt 60 ansatte i Sverige. I
          Norge har man inntil nå hatt et salgskontor med to selgere.
        </p>
        <p className={styles.pText}>
          <span style={{ fontWeight: "600" }}>
            Fullverdig servicesenter på Stange
          </span>
          <br />
          Stridsbergs Norge AS etablerte seg 1987 i Norge og er en ledende
          servicestasjon både for sirkel- og båndsagblader. Stridsbergs Norge AS
          representerer og selger flere etablerte varemerker av skjærende
          verktøy og har i dag totalt 16 ansatte i sin virksomhet på Stange i
          nærheten av Hamar.
        </p>
        <p className={styles.pText}>
          – Målsettingen med oppkjøpet er at vi nå skal utvikle servicen i Norge
          videre, sier David Kvarnstrand. – For og kunne gi de norske kundene
          den beste og mest effektive service, skaper vi nå en komplett
          fullservice virksomhet på Stange, samt at vi samler våre virksomheter
          under ett tak. Vår produktportefølge kommer også til å kompletteres
          med japansk Kanefusas produktprogram. Geografisk sett ligger Stange
          optimalt for å tilfredstille kundenes behov. Vi vil fortsette med å
          videreutvikle markedsbearbeidningen med våre kompetente selgere.
          Gjennom flere personlige besøk ute hos kundene kan vi hjelpe til og
          videreutvikle våre kunders prosesser, fremholder Kvarnstrand.
        </p>
        <p className={styles.pText}>
          – Stridsbergs Norge AS vil fortsatt bli drevet videre av brødrene
          Peter og Christer Hesseborn. Personalet kommer til å arbeide videre
          som idag, og vi ser et stort potensiale for at Stridsbergs Norge skal
          vokse videre gjennom satsinger i markedet og nye maskininvesteringer,
          fastslår David Kvarnstrand. – Med denne satsing gir det oss
          forutsetninger for å fortsette og være delaktige og markedsledende i
          utviklingen av den norske skog- og treindustrien.
        </p>
      </div>
    </div>
  );
}

export default NyheterStartPage;
