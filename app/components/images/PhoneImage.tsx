import Image from "next/image";
import phoneIcon from "../assets/phone-icon.png";
import { CSSProperties } from "react";

const PhoneImage = () => {
  const imageStyle: CSSProperties = {
    marginRight: "15px",
  };

  return (
    <Image
      alt="envio-shipment-logo-whatsapp"
      src={phoneIcon}
      width={18}
      height={18}
      style={imageStyle}
    />
  );
};

export default PhoneImage;
