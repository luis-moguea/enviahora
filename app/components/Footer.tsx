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
import logo from "./assets/enviahora-img-Nav-png-last.png";
import { AiFillFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    maxWidth: isHigherThan480 ? "180px" : "120px",
    minHeight: isHigherThan480 ? "160px" : "120px",
    cursor: "pointer",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="rgba(77, 20, 140, 0.8)"
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
              <Box display="flex" justifyContent="center" alignItems="center">
                <Link href="https://wa.me/573024567533" isExternal>
                  <Icon
                    as={BsWhatsapp}
                    color="#25D366"
                    w={10}
                    h={8}
                    cursor="pointer"
                  ></Icon>
                </Link>
                <Link
                  href="https://instagram.com/enviahora?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                  isExternal
                >
                  <Icon
                    as={CiInstagram}
                    color="#E4405F"
                    ml="5px"
                    w={12}
                    h={10}
                    cursor="pointer"
                  ></Icon>
                </Link>
              </Box>
            </Box>
          </Box>
          <Text
            fontStyle="italic"
            fontSize="12px"
            color="#ffffff"
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
        <Text mt="20px" fontSize="12px" color="#ffffff" textAlign="center">
          Enviahora | Todos los derechos reservados &reg;
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
