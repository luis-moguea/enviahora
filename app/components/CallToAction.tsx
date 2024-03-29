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
        top={isHigherThan480 ? "8%" : "7%"}
        left={isHigherThan480 ? "16%" : "1%"}
        zIndex="999"
      >
        <Heading color="#4d148c" fontSize={isHigherThan480 ? "70px" : "50px"}>
          Envíos Internacionales
          <br />
          <span style={{ color: "#ff6200" }}>RÁPIDOS Y SEGUROS</span>
        </Heading>
        <Link href="https://wa.me/573024567533" isExternal>
          <Button
            mt={isHigherThan480 ? "40px" : "30px"}
            width={isHigherThan480 ? "250px" : "170px"}
            height="60px"
            fontSize={isHigherThan480 ? "25px" : "unset"}
            color="#ffffff"
            bgColor="#4d148c"
            borderRadius="40px"
            rightIcon={<WaLogo />}
            padding="20px"
            _hover={{ bgColor: "#ff6200" }}
          >
            Escribenos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CallToAction;
