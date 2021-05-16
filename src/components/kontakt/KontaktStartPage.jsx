import React from "react";
import styles from "../../../styles/KontaktStartPage.module.css";
import ContactCards from "./ContactCards";
import KontaktInfo from "./KontaktInfo";
import Map from "./Map";

function KontaktStartPage() {
  return (
    <div className={styles.container}>
      <KontaktInfo />
      <div className={styles.cardsContainer}>
        <ContactCards
          img="https://stridsbergs2.vercel.app/_next/static/images/kai-c85e3837eb338be70948094898af1117.jpg"
          name="Kai Lundquist"
          title="Daglig leder, salg"
          phone="488 99 268"
          mail="kai@stridsberg.no"
        />
        <ContactCards
          img="data:image/png;base64,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"
          name="Elisabeth Stuen"
          title="Kontor/økonomi"
          phone="952 36 882"
          mail="elisabeth@stridsberg.no"
        />
        <ContactCards
          img="https://stridsbergs2.vercel.app/_next/static/images/morten-d7a5cba7753c7238012bb89d901961ee.jpeg"
          name="Morten Flatset"
          title="Produktsjef høvleri"
          phone="951 30 191"
          mail="morten@stridsberg.no
          "
        />
        <ContactCards
          img="https://stridsbergs2.vercel.app/_next/static/images/tommy-a798b42babd324144dff872175bc8094.jpg"
          name="Tommy Aurbekkholen"
          title="Produktspesialist sagbruk"
          phone="949 87 318"
          mail="tommy@stridsberg.no
          "
        />
        <ContactCards
          img="https://stridsbergs2.vercel.app/_next/static/images/steffen-519b31fe46b49e728f3fd0e86c580f06.jpeg"
          name="Steffen Ramstad"
          title="Produktspesialist Trevare"
          phone="917 17 347"
          mail="steffen@stridsberg.no"
        />
        <ContactCards
          img="https://stridsbergs2.vercel.app/_next/static/images/thorleif-c0959c26a515c6a3d7aaa1c7ce06d5f0.jpg"
          name="Thorleif Edvardsen"
          title="Produksjonsleder"
          phone="952 26 508"
          mail="thorleif@stridsberg.no"
        />
        <ContactCards
          img="https://stridsbergs.vercel.app/_next/static/images/servicebil-84d925f2b77a8cbe61ad69d87bdf3229.jpg"
          name="Bjørn Simensen"
          title="Transport"
          phone="911 16 622"
          mail="bjørn@stridsberg.no"
        />
      </div>
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  );
}

export default KontaktStartPage;
