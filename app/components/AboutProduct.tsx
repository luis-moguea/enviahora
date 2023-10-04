"use client";

import { Box, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import ProductImage from "./images/ProductImage";
import { FiTruck } from "react-icons/fi";
import { MdTrackChanges } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";

const AboutProduct = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      width="100%"
      display={isHigherThan480 ? "flex" : "block"}
      p={isHigherThan480 ? "80px" : "unset"}
      justifyContent="center"
      gap="40px"
      alignItems="center"
    >
      <Box width={isHigherThan480 ? "50%" : "100%"}>
        <Heading as="h2" textAlign="justify" color="#4d148c">
          Sin importar lo que necesites enviar, nosotros llevaremos tus paquetes
          con la mejor empresa en el campo, ¡FedEx!
        </Heading>
        <Box mt="40px" width="100%">
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={FiTruck} w={6} h={5} color="#ff6200" />
            <Text>¡Envíos con el costo más competitivo del mercado!</Text>
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={MdTrackChanges} w={6} h={5} color="#ff6200" />
            ¡Seguimiento en tiempo real de tus envíos internacionales!
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={RiBillLine} w={6} h={5} color="#ff6200" />
            Para tu tranquilidad te brindamos facturación electrónica.
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={AiOutlineFieldTime} w={6} h={5} color="#ff6200" />
            ¡El tiempo de entrega de tus paquetes será siempre muy corto!
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={FaMotorcycle} w={6} h={5} color="#ff6200" />
            ¡Siempre recogeremos tu paquete para que no tengas que dejar la
            comodidad de tu hogar!
          </Box>
        </Box>
      </Box>
      <Box>
        <ProductImage />
      </Box>
    </Box>
  );
};

export default AboutProduct;
