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
    maxWidth: "180px",
    minHeight: "180px",
    borderRadius: "50%",
    border: "1px solid #fff",
    cursor: "pointer",
    objectFit: "cover",
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="#4d148c"
      minH={isHigherThan480 ? "400px" : "300px"}
      flexDir="column"
      width="100%"
    >
      <Box display="flex" padding="40px" pt="0">
        <Image
          alt="envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
          src={logo}
          style={imageStyle}
        />
        <Box display="flex" flexDir="column" padding="50px">
          <Box display="flex" alignItems="center">
            <Box>
              <Link
                href="https://www.fedex.com/es-es/shipping/served-countries.html"
                isExternal
              >
                <Icon
                  as={AiFillFacebook}
                  color="#1877F2"
                  w={12}
                  h={10}
                  cursor="pointer"
                ></Icon>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.fedex.com/es-es/shipping/served-countries.html"
                isExternal
              >
                <Icon
                  as={CiInstagram}
                  color="#E4405F"
                  ml="12px"
                  w={12}
                  h={10}
                  cursor="pointer"
                ></Icon>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.fedex.com/es-es/shipping/served-countries.html"
                isExternal
              >
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
          <Text
            fontStyle="italic"
            fontSize="14px"
            color="#F5DEB3"
            textAlign="center"
          >
            ¡Conexiones Sin Fronteras, Entregas Sin Preocupaciones!
          </Text>
        </Box>
      </Box>
      <Box width="60%">
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
