import Image from "next/image";
import fedexGirl from "../assets/fedex-girl.jpg";
import { CSSProperties } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const ProductImage = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    width: isHigherThan480 ? "700px" : "100%",
    height: isHigherThan480 ? "440px" : "230px",
    borderRadius: "15px",
    boxShadow: "8px 8px 14px 2px rgba(0, 0, 0, 0.2)",
    marginTop: isHigherThan480 ? "unset" : "40px",
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
