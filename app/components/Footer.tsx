"use client";

import { Box, Divider, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { CSSProperties } from "react";
import logo from "./assets/enviahora-img-Nav.png";
import { AiFillFacebook } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
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
      minH="400px"
      flexDir="column"
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
              <Icon
                as={AiFillFacebook}
                color="#1877F2"
                w={12}
                h={10}
                cursor="pointer"
              ></Icon>
            </Box>
            <Box>
              <Icon
                as={CiInstagram}
                color="#E4405F"
                ml="12px"
                w={12}
                h={10}
                cursor="pointer"
              ></Icon>
            </Box>
            <Box>
              <Icon
                as={BsWhatsapp}
                color="#25D366"
                ml="12px"
                w={10}
                h={8}
                cursor="pointer"
              ></Icon>
            </Box>
          </Box>
          <Text fontSize="14px" color="#F5DEB3" textAlign="center">
            sjdvh.nvjd.f
          </Text>
        </Box>
      </Box>
      <Box width="60%">
        <Divider
          sx={{
            boxShadow: "0 0 1px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Text></Text>
      </Box>
    </Box>
  );
};

export default Footer;
