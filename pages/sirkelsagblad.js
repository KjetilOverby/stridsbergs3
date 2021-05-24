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
        text="Vi leverer sagblad til alle typer av sager. Som agent for Kanefusa blader kan vi tilby et helhetlig konsept med lange standtider og bra resultat. Naturligvis har vi også et stort utvalg av andre sagbladprodusenter som passer til alle typer maskiner."
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
