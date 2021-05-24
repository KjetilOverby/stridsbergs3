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
        text="Som en av Norges ledende leverandører av produkter og service til sagbruk har vi en utrolig bred kunskap innen området. Vi er forhandler av Uddeholm båndsagblader, dette er båndsagblader som dekker de fleste behov."
        header2="Mest brukte kvaliteter:"
        text2="1450, ca 44HRC - er mest egnet for stukbånd, men det kan også stellitiseres,
        1600, ca 47HRC - stuk og stellitbånd.
        1670, ca 49HRC - Stellitbånd, Hardere kvalitet."
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
