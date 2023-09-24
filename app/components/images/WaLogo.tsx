import Image from "next/image";
import waLogo from "../../assets/waIcon.png";

const WaLogo = () => {
  return (
    <Image
      alt="envio-shipment-logo-whatsapp"
      src={waLogo}
      width={40}
      height={40}
    />
  );
};

export default WaLogo;
