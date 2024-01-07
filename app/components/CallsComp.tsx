"use client";

import {
  Box,
  Text,
  Link,
  Button,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import WaLogo from "./images/WaLogo";
import PhoneImage from "./images/PhoneImage";

const phoneNumber = "+573024567533";

const handleCall = () => {
  const phoneUrl = `tel:${phoneNumber}`;
  window.location.href = phoneUrl;

  console.log("call ok");
};

const CallsComp = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt={isHigherThan480 ? "unset" : "45px"}
    >
      <Heading color="#4d148c">¿Planeas hacer un envío?</Heading>
      <Text fontSize="24px" color="#4d148c" fontStyle="oblique">
        ¡Aquí te ayudamos!
      </Text>
      <Box display="flex" padding="2em" gap="15px">
        <Link href="https://wa.me/573024567533" isExternal>
          <Button
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
            Escribenos!
          </Button>
        </Link>
        <Button
          onClick={handleCall}
          width={isHigherThan480 ? "250px" : "170px"}
          height="60px"
          fontSize={isHigherThan480 ? "25px" : "unset"}
          color="#ffffff"
          bgColor="#ff6200"
          borderRadius="40px"
          rightIcon={<PhoneImage />}
          padding="20px"
          mb="40px"
          _hover={{ bgColor: "#4d148c" }}
        >
          Llamanos!
        </Button>
      </Box>
    </Box>
  );
};

export default CallsComp;
