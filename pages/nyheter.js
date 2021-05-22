import React from "react";
import styles from "../styles/Aktuelt.module.css";
import Head from "next/head";
import HeaderComponent from "../src/components/common/HeaderComponent";
import FooterComponent from "../src/components/common/FooterComponent";
import NyheterFrontPage from "../src/components/nyheter/NyheterFrontPage";
import ProductWrapper from "../src/components/common/products/ProduktWrapper";

const nyheter = () => {
  return (
    <ProductWrapper>
      <HeaderComponent />
      <div className={styles.newsImg}></div>
      <NyheterFrontPage />
      <FooterComponent />
    </ProductWrapper>
    // <div>
    //   <Head>
    //     <title>Nyheter | Stridsbergs & Kvarnstrands</title>
    //   </Head>
    //   <body>
    //     <div className={styles.container}>
    //       <div className={styles.headerContainer}>
    //         <HeaderComponent />
    //       </div>

    //       <div className={styles.contentContainer}>
    //         <NyheterStartPage />
    //       </div>
    //       <div className={styles.footerContainer}>
    //         <FooterComponent />
    //       </div>
    //     </div>
    //   </body>
    // </div>
  );
};

export default nyheter;
