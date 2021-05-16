import React from "react";
import styles from "../../../styles/Aktuelt.module.css";

function Salgbetingelser() {
  return (
    <div className={styles.salgbetingelserContainer}>
      <h1>Salgsbetingelser</h1>
      <ol>
        <li className={styles.list}>Generelt</li>
        <p className={styles.text}>
          Salgsbetingelser gjelder for alle tilbud og salg, med mindre annet er
          skriftlig avtalt med kjøper.
        </p>
        <li className={styles.list}>Priser/tilbud</li>
        <p className={styles.text}>
          Alle priser er oppgitt uten merverdigavgift, frakt og evt.
          spesialemballasje. Prisendringer som følge av endringer i
          valutekurser, offentlige toll og avgifter mv. som Kvarnstrands &
          Stridsbergs AS ikke kan påvirke skal komme i tillegg/fradrag til den
          avtalte pris.
        </p>
        <li className={styles.list}>Levering</li>
        <p className={styles.text}>
          Alle varer leveres DDP Stange. Ved bruk av Stridsbergs egen servicebil
          beregnes frakt etter avstand og vekt og/eller etter avtale. Ved bruk
          av andre transportører blir kunden debitert til selvkost. For varer
          som ikke er lagervare er oppgitte leveringstider og betrakte som
          veiledende. Selger plikter å opplyse kjøper om endring i leveringstid
          så snart dette kommer til hans kunnskap. Overskrider av veiledende
          levering gir ingen rett til heving av kjøpet og det betales ingen form
          for erstatning.
        </p>
        <li className={styles.list}>Reklamasjon</li>
        <p className={styles.text}>
          Kjøper plikter å kontrollere varene straks etter levering, og gi
          beskjed umiddelbart etter mottak dersom feil eller manger oppdages.
          Varer som er tatt i bruk eller som ikke kan framlegges for selger,
          erstattes ikke.
        </p>
        <li className={styles.list}>Garanti og ansvar</li>
        <p className={styles.text}>
          Selger garanterer en feilfri, funksjonsdyktig vare i henhold til våre
          underleverandørers gjeldende spesifikasjoner. Selger skal uten kostnad
          for kjøper utbedre eventuelle mangler som følge av material- eller
          fabrikasjonsfeil. Kjøper plikter å gi selger nødvendig tid for å
          avhjelpe mangelen, samt å stille varen til rådighet for selger gjennom
          eventuelle demontering og transport til selgers verksted. Våre
          forpliktelser bortfaller hvis det pviselig er gjort inngrep i varen
          eller hvis mangelen er oppstått gjennom ukyndig montering eller bruk.
          Selger sitt ansvar overfor kjøper er begrenset til kjøpers
          dokumentbare direkte tap, og kan ikke overstige fakturert beløp som
          danner grunnlag for kravet. Selger er ikke ansvarlig for indirekte tap
          eller konsekvenstap (inkludert erstatning for tapt fortjeneste eller
          tapte inntekter, driftsavbrudd eller tap som følge av varens videre
          anvendelse) som oppstår etter leveransen.
        </p>
        <li className={styles.list}>Fritaksgrunner (force majeure)</li>
        <p className={styles.text}>
          Følgende omstendigheter skal betraktes som fritakelsesgrunner dersom
          de hindrer avtalens oppfyllelse eller gjør oppfyllelsen urimelig
          tyngende: arbeidskonflikt, militær mobilisering, krig, brann,
          transportvanskeligheter, valutarestriksjoner og enhver annen
          omstendighet som partene ikke kan råde over, såfremt deres virkning på
          avtalens oppfyllelse ikke kunne forutsees ved avtalens inngåelse.
        </p>
        <li className={styles.list}>Avbestilling</li>
        <p className={styles.text}>
          Kjøperen har kun rett til å avbestille dersom selgeren kan avbestille
          overfor sin leverandør. Ved avbestilling må kjøper dekke alle
          omkostninger ved avbestillingen. Lagerførte varer kan kun avbestilles
          uten omkostninger dersom dette kan skje uten ulempe eller tap for
          selger.
        </p>
        <li className={styles.list}>Retur</li>
        <p className={styles.text}>
          Retur avtales på forhånd, og skjer for kjøpers egen regning og risiko.
          Varene skal returneres i ubeskadiget originalemballasje, vedlagt
          retrurmelding med opplysning om når varen er kjøpt, eventuelt kopi av
          faktura eller pakkseddel. det er en forutsetning for retur at varen
          ikke er tatt i bruk eller har vært montert, og at varen alders- og
          bruksmessig tilfredsstiller kvalitetskravene til tilsvarende ny vare.
          Spesialbetilte eller spesialfabrikerte varer tas ikke i retur.
        </p>
        <li className={styles.list}>Betaling</li>
        <p className={styles.text}>
          Pr. 15 dagers netto dersom ikke annen kredittid er avtalt. Ved
          forsinket betaling påløper renter etter de til enhver gjeldende
          bestemmelser om morarenter.
        </p>
        <li className={styles.list}>Eiendomsforhold</li>
        <p className={styles.text}>
          De leverte varer forblir selgers eiendom inntil de er fullt betalt.
          Aksept eller annen tilsvarende oppgjørsform ansees ikke som betaling
          før full innfrielse foreligger.
        </p>
        <li className={styles.list}>Tvistespørsmål</li>
        <p className={styles.text}>
          I tvistespørsmål gjelder selgersverneting for begge parter.
        </p>
      </ol>
      <div className={styles.line}></div>
      <p className={styles.underlineText1}>Kvarnstrands & Stridsbergs AS</p>
      <p className={styles.underlineText}>StensrudVeien 1, 2335 Stange</p>
      <p className={styles.underlineText}>Org.nr. NO982734347MVA</p>
    </div>
  );
}

export default Salgbetingelser;
