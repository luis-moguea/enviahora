"use client";

import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import ProductImage from "./images/ProductImage";
import { FiTruck } from "react-icons/fi";
import { MdTrackChanges } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";

const AboutProduct = () => {
  return (
    <Box
      display="flex"
      p="80px"
      justifyContent="center"
      gap="40px"
      alignItems="center"
    >
      <Box width="50%">
        <Heading as="h2" textAlign="justify">
          No importa lo que necesites enviar, nosotros te lo llevamos con la
          mejor empresa en el campo, ¡FedEx!
        </Heading>
        <Box mt="40px" width="500px">
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={FiTruck} w={6} h={5} color="#ff6200" />
            <Text>¡Envíos con el costo más competitivo del mercado!</Text>
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={MdTrackChanges} w={6} h={5} color="#ff6200" />
            Seguimiento en tiempo real de sus envíos internacionales.
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={RiBillLine} w={6} h={5} color="#ff6200" />
            Para tu tranquilidad te brindamos facturación electrónica de la Dian
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={AiOutlineFieldTime} w={6} h={5} color="#ff6200" />
            Tiempo de entrega de tus envíos en tiempos muy cortos!
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={FaMotorcycle} w={6} h={5} color="#ff6200" />Y lo mejor es
            que siempre recogeremos tu paquete para que no tengas que dejar la
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
