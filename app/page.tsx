"use client";

import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import CallToAction from "./components/CallToAction";
import { generalInfoData } from "./data/generalInfoData";
import GeneralInformation from "./components/GeneralInformation";
import WaLogo from "./components/images/WaLogo";
import WaLogoFixed from "./components/images/WaLogoFixed";

export default function Home() {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  return (
    <>
      <Navbar />
      <Text
        textAlign="center"
        fontStyle="oblique"
        marginTop={isHigherThan480 ? "10px" : "80px"}
        marginBottom="10px"
        fontWeight="bolder"
      >
        ¡Conexiones Sin Fronteras, Entregas Sin Preocupaciones!
      </Text>
      <CallToAction />
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
          />
        ))}
      </Box>
      <WaLogoFixed />
    </>
  );
}
