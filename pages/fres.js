import React from "react";
import ProduktWrapper from "../src/components/common/products/ProduktWrapper";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import styles from "../styles/ProduktWrapper.module.css";
import ProduktTemplate from "../src/components/common/products/ProduktTemplate";
function fres() {
  return (
    <ProduktWrapper>
      <HeaderComponent />
      <div className={styles.imgContainer}></div>
      <ProduktTemplate
        title="Produktspesialist"
        name="Morten Flatset"
        tel="951 30 191"
        mail="morten@stridsberg.no"
        header="Fres"
        profileImg="https://stridsbergs2.vercel.app/_next/static/images/morten-d7a5cba7753c7238012bb89d901961ee.jpeg"
        text="Vi levererar de flesta typer av stål. Våra stål hjälper er att maximera värdeutbytet. Har vi det inte i vårt standardsortiment kan vi efter mätningar tillverka just era stål. Kanefusa tillverkar dessa stål och detta genererar i sin tur långa gångtider och bra resultat."
        productImg="https://www.kvarnstrands.com/media/1265/hyvleri.jpg?width=336&height=219&bgcolor=white"
        footheader1="Kuttere"
        footheader2="Stål"
        productImg2="https://www.kvarnstrands.com/media/1106/hydrorundkutter-trans.jpg?width=336&height=219&bgcolor=white"
        productImg3="https://www.kvarnstrands.com/media/1288/hyvelstal.jpg?width=336&height=219&bgcolor=white"
      />
      <FooterComponent />
    </ProduktWrapper>
  );
}

export default fres;
