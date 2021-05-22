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
        text="Vi levererar de flesta typer av stål. Våra stål hjälper er att maximera värdeutbytet. Har vi det inte i vårt standardsortiment kan vi efter mätningar tillverka just era stål. Kanefusa tillverkar dessa stål och detta genererar i sin tur långa gångtider och bra resultat."
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
