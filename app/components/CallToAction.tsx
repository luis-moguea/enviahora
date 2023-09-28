"use client";

import { Box, Button, Heading, useMediaQuery } from "@chakra-ui/react";
import WaLogo from "./images/WaLogo";
import CallToActionImages from "./images/CallToActionImages";

const CallToAction = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <Box position="relative" width="100%" overflow="hidden">
        <CallToActionImages />
      </Box>
      <Box
        textAlign="center"
        padding={isHigherThan480 ? "100px" : "20px"}
        pt="20px"
        position="absolute"
        top="12%"
        left="5%"
        zIndex="999"
      >
        <Heading color="#4d148c" fontSize={isHigherThan480 ? "70px" : "20px"}>
          ¿Necesitas enviar un paquete?
          <br />
          ¡Aquí te ayudamos!
        </Heading>
        <Button
          mt={isHigherThan480 ? "40px" : "10px"}
          width={isHigherThan480 ? "250px" : "120px"}
          height={isHigherThan480 ? "60px" : "40px"}
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
      </Box>
    </>
  );
};

export default CallToAction;
