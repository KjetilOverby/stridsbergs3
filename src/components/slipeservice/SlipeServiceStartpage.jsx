import React from "react";
import BandsagbladService from "./BandsagbladService";
import KniverService from "./KniverService";
import Servicerute from "./Servicerute";
import ServiceSagblad from "./ServiceSagblad";

function SlipeServiceStartpage() {
  return (
    <div>
      <ServiceSagblad />
      <BandsagbladService />
      <KniverService />
      <Servicerute />
    </div>
  );
}

export default SlipeServiceStartpage;
