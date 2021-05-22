import React from "react";
import styles from "../../../styles/NyheterFrontPage.module.css";
import NewsCard from "./NewsCard";

const NyheterFrontPage = () => {
  return (
    <div className={styles.container}>
      <NewsCard
        title="Norges største på sagblad"
        dato="31.08.2017"
        img="https://lh3.googleusercontent.com/pw/ACtC-3djXvABgFak6ICNGCWpqtg_F3oIQk9IZq9LuHEWfjFxfCdlqQyBbQMwKKppN4QvfgL-E2AdLS0_mqA91KEggTbXHIQe1sU2Wfd4sTKrRzbT2Ls82lrxzDOFX_AdBbb9gvf2mrq6MmZAywemz_JNqh8h=w970-h643-no?authuser=0"
        text="Stange: Siden oppstarten i 1987 har Stridsbergs A/S vært en solid leverandør av skjærende verktøy. Nylig ble 30-års jubileet feiret med åpent hus og grillmat. (Stangeavisa)"
      />
      <NewsCard
        title="Kvarnstrands overtar Stridsbergs Norge"
        dato="18.08.2018"
        img="https://lh3.googleusercontent.com/pw/ACtC-3fkHvG7_Zn0x3OM8IuRv4ACQtM7-C6hA3rniSNI7yANC6beOajmRvmXEPcjej9sJhIlfhs84R2qvbWG9PwY8z9GGzckxfdmDCCYapAsAFKzz8PvAr2he1szzOUMdIhQEpvWklSimohftc9lzMkCIbQh=w460-h311-no?authuser=0"
        text="2011.08.18 Kvarnstrands Verktyg AB har kjøpt Stridsbergs Norge AS og øker dermed sin virksomhet i Norge. – Vi kan nå tilby våre kunder innen tre, aluminium og metallbearbeidning ett komplett program når det gjelder service, verktøy, utdanning og optimalisering, heter det i en pressemelding fra Kvarnstrands. (Skogindustri)"
      />
      <NewsCard
        title="Investeringer"
        dato="01.10.2018"
        img="https://lh3.googleusercontent.com/pw/ACtC-3e4OA89MtAN5ailxSqJe8qlxGG8_YXfAhOPsViDO_0ipqETemTGDICx-h12feUXTNmgNO6TGVIIFRGIXnr8WDWjyJuKKG3wpi37SIFNd2A3PVX6Ttrda8c5yXTeBOAFEsU4BDh78LV2nmhEIEu2Bk_H=w1716-h1108-no?authuser=0"
        text="Nyfusjonerte Kvarnstrands & Stridsbergs kombinerer håndar- beid med en flunkende ny slipeperobot. – Historiens største investering i en slipemaskin i Norge, sier daglig leder Kai Lundquist. (Treindustrien)
        "
        goTo="/nyheter3"
      />
    </div>
  );
};

export default NyheterFrontPage;
