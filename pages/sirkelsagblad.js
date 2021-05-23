import React from "react";
import ProduktWrapper from "../src/components/common/products/ProduktWrapper";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import styles from "../styles/ProduktWrapper.module.css";
import ProduktTemplate from "../src/components/common/products/ProduktTemplate";
function sirkelsagblad() {
  return (
    <ProduktWrapper>
      <HeaderComponent />
      <div className={styles.imgContainer}></div>
      <ProduktTemplate
        title="Produktspesialist"
        name="Tommy Aurbekkholen"
        profileImg="https://stridsbergs2.vercel.app/_next/static/images/tommy-a798b42babd324144dff872175bc8094.jpg"
        tel="949 87 318"
        mail="tommy@stridsberg.no"
        header="Sirkelsagblad"
        text="Vi levererar sågklingor till alla typer av sågar. Som agent för Kanefusas produkter kan vi erbjuda ett helhetskoncept med långa gångtider och ett fantastisk resultat. Naturligtvis har vi även ett stort utbud av andra klingor anpassade för alla typer av maskiner på marknaden. Nedan finner ni endast ett urval av vad vi kan leverera. Kontakta oss gärna för mer information."
        productImg="https://www.kvarnstrands.com/media/1261/uppdelningsklinga-framsida.jpg?width=336&height=219&bgcolor=white"
        footheader1="Kniver"
        footheader2="Båndsagblad"
        productImg2="https://www.kvarnstrands.com/media/1257/huggstal-1.jpg?width=336&height=219&bgcolor=white"
        productImg3="https://www.kyocera-unimerco.no/globalassets/general/metal/sawing/rx-250.jpg"
      />
      <FooterComponent />
    </ProduktWrapper>
  );
}

export default sirkelsagblad;
