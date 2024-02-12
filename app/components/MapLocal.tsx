"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import { CSSProperties } from "react";

const MapLocal = () => {
  const iframeStyle: CSSProperties = {
    border: 0,
    margin: "auto",
    borderRadius: "20px",
    alignSelf: "center",
  };

  return (
    <Box
      width="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3966.0973345102298!2d-75.57128833981982!3d6.250904193711421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x8e4428f8d2bbf907%3A0x3c15d73310c5f9b4!2sParque%20Berr%C3%ADo%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!3m2!1d6.2504520999999995!2d-75.56823589999999!4m5!1s0x8e4429eedcb34fdb%3A0x7d9981c80624e051!2sEnviahora%2C%20Centro%20comercial%20Veracruz%2C%20Av.%20Carabobo%20%2351-52%20local%203233%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!3m2!1d6.251331899999999!2d-75.56901239999999!5e0!3m2!1ses-419!2sco!4v1707777769581!5m2!1ses-419!2sco"
        width="90%"
        height="450"
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default MapLocal;
