"use client";

import { Box, Button, Heading, useMediaQuery, Link } from "@chakra-ui/react";
import WaLogo from "./images/WaLogo";
import CallToActionImgUse from "./CallToActionImages";

const CallToAction = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box width="100%">
      <Box position="relative" overflow="hidden">
        <CallToActionImgUse />
      </Box>
      <Box
        textAlign="center"
        padding={isHigherThan480 ? "100px" : "0px"}
        pt="20px"
        position="absolute"
        top={isHigherThan480 ? "12%" : "11%"}
        left={isHigherThan480 ? "5%" : "3%"}
        zIndex="999"
      >
        <Heading color="#4d148c" fontSize={isHigherThan480 ? "70px" : "40px"}>
          ¿Necesitas enviar un paquete desde Medellín?
          <br />
          ¡Aquí te ayudamos!
        </Heading>
        <Link
          href="https://www.fedex.com/es-es/shipping/served-countries.html"
          isExternal
        >
          <Button
            mt={isHigherThan480 ? "40px" : "30px"}
            width={isHigherThan480 ? "250px" : "170px"}
            height="60px"
            fontSize={isHigherThan480 ? "25px" : "unset"}
            color="#ffffff"
            bgColor="#ff6200"
            borderRadius="40px"
            rightIcon={<WaLogo />}
            padding="20px"
            _hover={{ bgColor: "#4d148c" }}
          >
            Cotiza Ahora!
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CallToAction;
