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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.094034671132!2d-75.57161778981984!3d6.2513393937109925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428fed74c3a65%3A0xf334493e0fb062fa!2sCentro%20Comercial%20Veracruz!5e0!3m2!1ses!2sco!4v1706370608595!5m2!1ses!2sco"
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
