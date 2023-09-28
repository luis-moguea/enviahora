"use client";

import { Box, useMediaQuery } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AboutProduct from "./components/AboutProduct";
import { generalInfoData } from "./data/generalInfoData";
import GeneralInformation from "./components/GeneralInformation";
import WaLogoFixed from "./components/images/WaLogoFixed";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import CallToAction from "./components/CallToAction";

export default function Home() {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const sloganStyle: CSSProperties = {
    fontSize: isHigherThan480 ? "25px" : "18px",
    textAlign: "center",
    fontStyle: "oblique",
    marginTop: isHigherThan480 ? "10px" : "80px",
    marginBottom: "10px",
    fontWeight: "bolder",
  };

  return (
    <>
      <Navbar />
      <motion.h1
        initial={{ x: "-100%" }} // Posición inicial (fuera de la pantalla a la izquierda)
        animate={{ x: 0 }} // Posición final (en el centro)
        transition={{ duration: 1 }} // Duración de la animación en segundos
        style={sloganStyle}
      >
        ¡Conexiones Sin Fronteras, Entregas Sin Preocupaciones!
      </motion.h1>
      <CallToAction />
      <AboutProduct />
      <Box
        display="flex"
        alignItems="center"
        padding={isHigherThan480 ? "40px" : "20px"}
        overflowX="auto"
      >
        {generalInfoData.map((el, index) => (
          <GeneralInformation
            key={index}
            alt={el.alt}
            image={el.image}
            text={el.text}
            ml={index !== 0 ? "20px" : "unset"}
          />
        ))}
      </Box>
      <WaLogoFixed />
    </>
  );
}
