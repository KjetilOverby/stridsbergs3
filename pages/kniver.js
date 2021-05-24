import React from "react";
import ProduktWrapper from "../src/components/common/products/ProduktWrapper";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import styles from "../styles/ProduktWrapper.module.css";
import ProduktTemplate from "../src/components/common/products/ProduktTemplate";
function kniver() {
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
        header="Kniver"
        text="Vi leverer de fleste typer av stål. Våre stål hjelper deg att maksimere verdiutbyttet."
        header2="Motstål - Huggkniver - Reduserkniver - Rillestål"
        text2="Vi har egen knivsliper slik at vi kan møte våre kunders behov for slipeservice av kniver.

        Vi sliper kniver inntil 2600mm lengde.
        
        Kontakt oss for mere info og pris - vi kan hjelpe dere med det meste."
        productImg="https://www.kvarnstrands.com/media/1257/huggstal-1.jpg?width=336&height=219&bgcolor=white"
        footheader1="Båndsagblad"
        footheader2="Sirkelsagblad"
        productImg2="https://www.kyocera-unimerco.no/globalassets/general/metal/sawing/rx-250.jpg"
        productImg3="https://www.kvarnstrands.com/media/1261/uppdelningsklinga-framsida.jpg?width=336&height=219&bgcolor=white"
      />
      <FooterComponent />
    </ProduktWrapper>
  );
}

export default kniver;
