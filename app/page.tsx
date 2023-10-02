"use client";

import React, { useState } from "react";
import {
  Box,
  Heading,
  useMediaQuery,
  Icon,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AboutProduct from "./components/AboutProduct";
import { generalInfoData } from "./data/generalInfoData";
import GeneralInformation from "./components/GeneralInformation";
import WaLogoFixed from "./components/images/WaLogoFixed";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { BiArrowBack } from "react-icons/bi";
import WaLogo from "./components/images/WaLogo";
import { FaPlane } from "react-icons/fa";

type ContentType = "main" | "about" | "bonus" | "countries";

export default function Home() {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const [showContent, setShowContent] = useState<ContentType>("main");

  const handleShowContent = (content: ContentType) => {
    setShowContent(content);
  };

  const sloganStyle: CSSProperties = {
    fontSize: isHigherThan480 ? "25px" : "18px",
    textAlign: "center",
    fontStyle: "oblique",
    marginTop: isHigherThan480 ? "10px" : "80px",
    marginBottom: "10px",
    fontWeight: "bolder",
  };

  return (
    <Box>
      <Navbar
        onClickBonus={() => handleShowContent("bonus")}
        onClickAbout={() => handleShowContent("about")}
        onClickCountries={() => handleShowContent("countries")}
        onClickLogo={() => handleShowContent("main")}
      />
      {showContent === "main" && (
        <Box>
          <motion.h1
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            style={sloganStyle}
          >
            ¡Conexiones Sin Fronteras, Entregas Sin Preocupaciones!
          </motion.h1>
          <CallToAction />
          <AboutProduct />
          <Box>
            <Heading as="h2" textAlign="center" color="#4d148c">
              Ellos ya vivieron la experiencia. ¡Se tú el siguiente en vivirla!
            </Heading>
            <Box
              display="flex"
              alignItems="center"
              padding={isHigherThan480 ? "40px" : "20px"}
              overflowX="auto"
              sx={{
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {generalInfoData.map((el, index) => (
                <GeneralInformation
                  key={index}
                  alt={el.alt}
                  image={el.image}
                  text={el.text}
                  name={el.name}
                  ml={index !== 0 ? "20px" : "unset"}
                />
              ))}
            </Box>
          </Box>
          <Footer />
          <Link
            href="https://www.fedex.com/es-es/shipping/served-countries.html"
            isExternal
          >
            <WaLogoFixed />
          </Link>
        </Box>
      )}
      {showContent === "about" && (
        <Box padding="100px" pt="40px">
          <Icon
            onClick={() => handleShowContent("main")}
            as={BiArrowBack}
            cursor="pointer"
            width={6}
            height={6}
          >
            Volver
          </Icon>
          <Heading textAlign="center" as="h2" color="#4d148c">
            EnviAhora: Conduciendo el Camino de la Excelencia en Envíos
            Internacionales
          </Heading>
          <Text mt="10px" textAlign="justify">
            Con 16 años de experiencia en el mundo de los envíos
            internacionales, EnviAhora se ha convertido en un pilar de
            confiabilidad y excelencia en Colombia. Desde nuestros humildes
            comienzos, hemos crecido y evolucionado constantemente para
            satisfacer las crecientes necesidades de nuestros clientes,
            ofreciendo soluciones de envío internacionales de primera clase.
          </Text>
          <Heading textAlign="center" mt="30px" as="h2" color="#4d148c">
            Nuestra Misión
          </Heading>
          <Text mt="10px" textAlign="justify">
            Nuestra misión en EnviAhora es proporcionar un servicio de envío
            internacional sin igual, brindando a nuestros clientes la
            tranquilidad que merecen. Nos enorgullece ser su socio confiable en
            cada paso del proceso de envío, desde la preparación de documentos
            hasta la entrega final.
          </Text>
          <Heading textAlign="center" mt="30px" as="h2" color="#4d148c">
            Nuestra Visión
          </Heading>
          <Text mt="10px" textAlign="justify">
            EnviAhora aspira a ser líder en envíos internacionales en Colombia y
            el mundo. Queremos ser la primera elección para nuestros clientes,
            expandirnos globalmente y mantener nuestro compromiso con la
            confiabilidad y la excelencia. Nuestra visión es construir
            conexiones globales y contribuir al crecimiento en un mundo cada vez
            más interconectado.
          </Text>
        </Box>
      )}
      {showContent === "bonus" && (
        <Box padding="100px" pt="40px">
          <Icon
            onClick={() => handleShowContent("main")}
            as={BiArrowBack}
            cursor="pointer"
            width={6}
            height={6}
          >
            Volver
          </Icon>
          <Heading textAlign="center" as="h2" color="#4d148c" fontSize="40px">
            Bonos
          </Heading>
          <Box>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              ¡Oferta Exclusiva!
            </Text>
            <Text>
              ¡Síguenos en redes sociales y ahorra un{" "}
              <Text fontWeight="bold" as="span">
                5%
              </Text>{" "}
              en tus envíos internacionales con EnviAhora! 🌍✈️
            </Text>
            <Text mt={4}>
              En EnviAhora valoramos tu apoyo y confianza. Por eso, te ofrecemos
              un descuento especial del{" "}
              <Text fontWeight="bold" as="span">
                5%
              </Text>{" "}
              en tus envíos internacionales cuando nos sigues en nuestras redes
              sociales. Es fácil:
            </Text>
            <Text mt={2}>1. Síguenos en Facebook e Instagram.</Text>
            <Text>2. Realiza tu envío internacional con nosotros.</Text>

            <Text mt={4}>
              ¡Así de simple! Disfruta de envíos de primera clase con un{" "}
              <Text fontWeight="bold" as="span">
                5%
              </Text>{" "}
              de descuento. Únete a nuestra comunidad en línea y ahorra mientras
              conectamos el mundo para ti. 🌐✨
            </Text>
            <Text mt={4}>
              No pierdas esta oportunidad. Síguenos hoy y comienza a ahorrar en
              tus envíos con EnviAhora.
            </Text>
          </Box>
          <Link
            href="https://www.fedex.com/es-es/shipping/served-countries.html"
            isExternal
          >
            <Button
              mt={isHigherThan480 ? "40px" : "10px"}
              width={isHigherThan480 ? "250px" : "120px"}
              height={isHigherThan480 ? "60px" : "40px"}
              fontSize={isHigherThan480 ? "25px" : "unset"}
              color="#ffffff"
              bgColor="#ff6200"
              borderRadius="40px"
              rightIcon={<WaLogo />}
              padding="20px"
              _hover={{ bgColor: "#4d148c" }}
            >
              Cotiza Ahora!
            </Button>
          </Link>
        </Box>
      )}
      {showContent === "countries" && (
        <Box padding="100px" pt="40px">
          <Icon
            onClick={() => handleShowContent("main")}
            as={BiArrowBack}
            cursor="pointer"
            width={6}
            height={6}
          ></Icon>
          <Heading textAlign="center" as="h2" color="#4d148c" fontSize="40px">
            Paises Destino
          </Heading>
          <Box mt="40px">
            <Box display="flex" fontSize="lg">
              <Icon color="#ff6200" as={FaPlane} fontSize="2xl" mr={2} />
              <Text fontWeight="bold">
                Actualmente, ofrecemos opciones de envío económico que brindan
                flexibilidad en los tiempos de entrega:
              </Text>
            </Box>
            <Box mt={4} ml={4}>
              <Icon color="#ff6200" as={FaPlane} fontSize="md" mr={2} /> Para
              países seleccionados, nuestros envíos económicos pueden entregarse
              en tan solo 2 a 3 días hábiles, lo que garantiza una rápida
              llegada de tus paquetes.
            </Box>
            <Box mt={2} ml={4}>
              <Icon color="#ff6200" as={FaPlane} fontSize="md" mr={2} /> Para un
              alcance aún más amplio, extendemos nuestros servicios a más de 215
              países y territorios. En estos casos, los envíos económicos pueden
              tardar de 2 a 5 días en llegar a su destino, asegurando una
              entrega eficiente y económica en todo el mundo.
            </Box>
            <Link
              href="https://www.fedex.com/es-es/shipping/served-countries.html"
              isExternal
            >
              <Button
                justifyContent="center"
                mt={isHigherThan480 ? "40px" : "10px"}
                width={isHigherThan480 ? "250px" : "120px"}
                height={isHigherThan480 ? "60px" : "40px"}
                fontSize={isHigherThan480 ? "25px" : "unset"}
                color="#ffffff"
                bgColor="#ff6200"
                borderRadius="40px"
                rightIcon={<WaLogo />}
                padding="20px"
                _hover={{ bgColor: "#4d148c" }}
              >
                Cotiza Ahora!
              </Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}
