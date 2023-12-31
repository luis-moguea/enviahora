"use client";

import {
  Box,
  Divider,
  Icon,
  Text,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { CSSProperties } from "react";
import logo from "./assets/enviahora-img-Nav.png";
import { AiFillFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    maxWidth: isHigherThan480 ? "180px" : "120px",
    minHeight: isHigherThan480 ? "180px" : "120px",
    borderRadius: "50%",
    border: "1px solid #fff",
    cursor: "pointer",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="#4d148c"
      minH={isHigherThan480 ? "400px" : "250px"}
      flexDir="column"
      width="100%"
      mt="40px"
      p={isHigherThan480 ? "unset" : "40px"}
    >
      <Box
        display="flex"
        flexDir={isHigherThan480 ? "unset" : "unset"}
        justifyContent={isHigherThan480 ? "unset" : "center"}
        alignItems={isHigherThan480 ? "unset" : "center"}
        padding="40px"
        pt="0"
      >
        <Image
          alt="envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
          src={logo}
          style={imageStyle}
        />
        <Box
          display="flex"
          flexDir="column"
          padding={isHigherThan480 ? "50px" : "20px"}
        >
          <Box display="flex" alignItems="center">
            <Box display="flex">
              <Box>
                <Link href="https://wa.me/573024567533" isExternal>
                  <Icon
                    as={BsWhatsapp}
                    color="#25D366"
                    ml="12px"
                    w={10}
                    h={8}
                    cursor="pointer"
                  ></Icon>
                </Link>
              </Box>
            </Box>
          </Box>
          <Text
            fontStyle="italic"
            fontSize="12px"
            color="#F5DEB3"
            textAlign="left"
          >
            ¡Conexiones Sin Fronteras, Entregas Sin Preocupaciones!
          </Text>
        </Box>
      </Box>
      <Box width={isHigherThan480 ? "60%" : "80%"}>
        <Divider
          sx={{
            boxShadow: "0 0 1px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Text mt="20px" fontSize="12px" color="#F5DEB3" textAlign="center">
          Enviahora | Todos los derechos reservados &reg;
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
