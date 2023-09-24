import Image from "next/image";
import waLogo from "../../assets/waIcon.png";
import { Box } from "@chakra-ui/react";
import { CSSProperties } from "react";

const WaLogoFixed = () => {
  const containerStyle: CSSProperties = {
    position: "fixed",
    bottom: "3%",
    right: "3%",
    zIndex: 999,
    width: "60px",
    height: "60px",
    cursor: "pointer",
  };

  return (
    <Image
      alt="envio-shipment-logo-whatsapp"
      src={waLogo}
      style={containerStyle}
    />
  );
};

export default WaLogoFixed;
