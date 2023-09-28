import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";

import airplanesImage from "./assets/fx-airplane.jpg";
import workerImage from "./assets/fx-mr.jpg";
import truckImage from "./assets/fx-truck.jpg";
import "../../app/globals.css";

const bgImages = [airplanesImage, workerImage, truckImage];

const CallToActionImgUse = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "600px",
    objectFit: "cover",
    opacity: "0.6",
    transition: "opacity 1s ease-in-out",
  };

  useEffect(() => {
    // Función para cambiar la imagen de fondo cada 3 segundos
    const changeBackgroundImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    };

    // Configurar un intervalo para llamar a la función cada 3 segundos
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Image
      className="bg-image"
      alt="fedex-envios-internacionales-shipment"
      style={imageStyle}
      src={bgImages[currentImageIndex]}
    />
  );
};

export default CallToActionImgUse;
