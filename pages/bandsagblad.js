import React from "react";
import ProduktWrapper from "../src/components/common/products/ProduktWrapper";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import styles from "../styles/ProduktWrapper.module.css";
import ProduktTemplate from "../src/components/common/products/ProduktTemplate";
function bandsagblad() {
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
        header="Båndsagblad"
        text="Som en av Sveriges och Norges ledande leverantörer av produkter och service mot sågverk har vi en otroligt bred kunskap inom området. I vårt produktsortiment finner ni bland annat Kanefusa som är världens ledande producent av sågklingor.
        Vår erfarenhet av optimering och inställningar av såglinjer gör oss till den ultimata samarbetspartnern inom området.
        Vi sysslar med kontinuerlig utveckling mot er som kunds specifika behov och förutsättningar.
        Hos oss finner ni allt ifrån sågklingor, huggstål till personal som kan komma till just er och rikta upp och förbättra er såglinje. Kontakta oss gärna för mer information!"
        productImg="https://www.kyocera-unimerco.no/globalassets/general/metal/sawing/rx-250.jpg"
        footheader1="Kniver"
        footheader2="Sirkelsagblad"
        productImg2="https://www.kvarnstrands.com/media/1257/huggstal-1.jpg?width=336&height=219&bgcolor=white"
        productImg3="https://www.kvarnstrands.com/media/1261/uppdelningsklinga-framsida.jpg?width=336&height=219&bgcolor=white"
      />
      <FooterComponent />
    </ProduktWrapper>
  );
}

export default bandsagblad;
