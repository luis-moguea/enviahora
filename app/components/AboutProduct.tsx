"use client";

import { Box, Heading, Icon, Text, useMediaQuery } from "@chakra-ui/react";
import ProductImage from "./images/ProductImage";
import { FiTruck } from "react-icons/fi";
import { MdTrackChanges } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import { FaMotorcycle } from "react-icons/fa";
import { MdImportExport } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

const AboutProduct = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const expStyle: CSSProperties = {
    textAlign: "center",
    color: "#4d148c",
    width: "100%",
    fontSize: "30px",
    marginTop: "40px",
  };

  return (
    <Box
      width="100%"
      display={isHigherThan480 ? "flex" : "block"}
      p={isHigherThan480 ? "80px" : "20px"}
      justifyContent="center"
      gap="40px"
      alignItems="center"
    >
      <Box width={isHigherThan480 ? "50%" : "100%"}>
        <Box>
          <Heading
            as="h2"
            fontSize="36px"
            textAlign={isHigherThan480 ? "justify" : "center"}
            color="#4d148c"
          >
            Sin importar lo que necesites enviar, nosotros llevaremos tus
            paquetes con la mejor empresa en el campo, ¡Fed
            <Text as="span" color="#ff6200">
              Ex
            </Text>
            !
          </Heading>
          <motion.h2
            style={expStyle}
            animate={{
              color: "#4d148c",
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
          >
            ¿Por qué elegir EnviAhora?
          </motion.h2>
        </Box>
        <Box mt="25px" width="100%">
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
            <Icon as={MdImportExport} w={6} h={5} color="#ff6200" />
            ¡Realizamos importaciones y exportaciones!
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={MdSupportAgent} w={6} h={5} color="#ff6200" />
            ¡Brindamos atención personalizada y asesoría aduanera!
          </Box>
          <Box display="flex" gap="10px" mt="20px">
            <Icon as={FaMotorcycle} w={6} h={5} color="#ff6200" />
            ¡Servicio puerta a puerta sin costo adicional para que no tengas que
            dejar la comodidad de tu hogar!
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
