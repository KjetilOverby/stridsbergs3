import React from "react";
import FooterComponent from "../src/components/common/FooterComponent";
import HeaderComponent from "../src/components/common/HeaderComponent";
import StandardLayout from "../src/components/common/StandardLayout";
import Nyheter2StartPage from "../src/components/nyheter/Nyheter2StartPage";

function nyheter2() {
  return (
    <StandardLayout>
      <HeaderComponent />
      <Nyheter2StartPage />
      <FooterComponent />
    </StandardLayout>
  );
}

export default nyheter2;
