"use client";

import { Box, Icon, Text } from "@chakra-ui/react";
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
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="#4d148c"
        minH="350px"
      >
        <Image
          alt="envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
          src={logo}
          style={imageStyle}
        />
        <Box padding="50px">
          <Box display="flex">
            <Box>
              <Icon as={AiFillFacebook} color="#1877F2" w={12} h={10}></Icon>
            </Box>
            <Box>
              <Icon as={CiInstagram} color="#E4405F" w={8} h={6}></Icon>
            </Box>
            <Box>
              <Icon as={BsWhatsapp} color="#25D366" w={8}></Icon>
            </Box>
          </Box>
          <Text>sjdvh.nvjd.f</Text>
        </Box>
      </Box>
      <hr />
      <Text></Text>
    </>
  );
};

export default Footer;
