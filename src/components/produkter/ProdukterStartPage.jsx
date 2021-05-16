import React from "react";
import styles from "../../../styles/Produkter.module.css";
import Bandsagblad from "./Bandsagblad";
import Kniver from "./Kniver";
import Sirklesagblad from "./Sirklesagblad";

function ProdukterStartPage() {
  return (
    <div className={styles.startPageContainer}>
      <Sirklesagblad />
      <Bandsagblad />
      <Kniver />
    </div>
  );
}

export default ProdukterStartPage;
