import Image from "next/image";
import fedexGirl from "../assets/fedex-girl.jpg";
import { CSSProperties } from "react";

const ProductImage = () => {
  const imageStyle: CSSProperties = {
    width: "700px",
    height: "440px",
    borderRadius: "15px",
    boxShadow: "8px 8px 14px 2px rgba(0, 0, 0, 0.2)",
  };
  return (
    <Image
      alt="envios-internacionales-shipment-whatsapp-economico-baratos"
      src={fedexGirl}
      style={imageStyle}
    />
  );
};

export default ProductImage;
