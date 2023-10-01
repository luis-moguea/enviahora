"use client";

import {
  Box,
  Heading,
  useMediaQuery,
  Text,
  Icon,
  Button,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AboutProduct from "./components/AboutProduct";
import { generalInfoData } from "./data/generalInfoData";
import GeneralInformation from "./components/GeneralInformation";
import WaLogoFixed from "./components/images/WaLogoFixed";
import { motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { BiArrowBack } from "react-icons/bi";
import WaLogo from "./components/images/WaLogo";

export default function Home() {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const [showAbout, setShowAbout] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showBonus, setShowBonus] = useState(false);

  useEffect(() => {
    setShowMain(true);
  }, []);

  const handleShowAbout = () => {
    if (showMain) {
      setShowMain(false);
    }
    if (showBonus) {
      setShowBonus(false);
    }
    setShowAbout(true);
  };

  const handleShowBonus = () => {
    if (showMain) {
      setShowMain(false);
    }
    if (showAbout) {
      setShowAbout(false);
    }
    setShowBonus(true);
  };

  const handleMain = () => {
    if (showAbout) {
      setShowAbout(false);
    }
    if (showBonus) {
      setShowBonus(false);
    }
    setShowMain(true);
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
    <>
      {showMain && (
        <Box>
          <Navbar
            onClickBonus={handleShowBonus}
            onClickAbout={handleShowAbout}
          />
          <motion.h1
            initial={{ x: "-100%" }} // Posición inicial (fuera de la pantalla a la izquierda)
            animate={{ x: 0 }} // Posición final (en el centro)
            transition={{ duration: 1 }} // Duración de la animación en segundos
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
          <WaLogoFixed />
        </Box>
      )}
      {showAbout && (
        <>
          <Navbar
            onClickBonus={handleShowBonus}
            onClickAbout={handleShowAbout}
          />
          <Box padding="100px" pt="40px">
            <Icon
              onClick={handleMain}
              ml="-25px"
              as={BiArrowBack}
              cursor="pointer"
              width={6}
              height={6}
            ></Icon>
            <Heading textAlign="center" as="h2" color="#4d148c">
              EnviAhora: Conduciendo el Camino de la Excelencia en Envíos
              Internacionales
            </Heading>
            <Text mt="10px">
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
            <Text mt="10px">
              Nuestra misión en EnviAhora es proporcionar un servicio de envío
              internacional sin igual, brindando a nuestros clientes la
              tranquilidad que merecen. Nos enorgullece ser su socio confiable
              en cada paso del proceso de envío, desde la preparación de
              documentos hasta la entrega final.
            </Text>
            <Heading textAlign="center" mt="30px" as="h2" color="#4d148c">
              Nuestra Visión
            </Heading>
            <Text mt="10px">
              EnviAhora aspira a ser líder en envíos internacionales en Colombia
              y el mundo. Queremos ser la primera elección para nuestros
              clientes, expandirnos globalmente y mantener nuestro compromiso
              con la confiabilidad y la excelencia. Nuestra visión es construir
              conexiones globales y contribuir al crecimiento en un mundo cada
              vez más interconectado.
            </Text>
          </Box>
        </>
      )}
      {showBonus && (
        <>
          <Navbar
            onClickBonus={handleShowBonus}
            onClickAbout={handleShowAbout}
          />
          <Box
            padding="100px"
            pt="40px"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Icon
              onClick={handleMain}
              alignSelf="flex-start"
              as={BiArrowBack}
              cursor="pointer"
              width={6}
              height={6}
            ></Icon>
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
                En EnviAhora valoramos tu apoyo y confianza. Por eso, te
                ofrecemos un descuento especial del{" "}
                <Text fontWeight="bold" as="span">
                  5%
                </Text>{" "}
                en tus envíos internacionales cuando nos sigues en nuestras
                redes sociales. Es fácil:
              </Text>
              <Text mt={2}>1. Síguenos en Facebook e Instagram.</Text>
              <Text>2. Realiza tu envío internacional con nosotros.</Text>

              <Text mt={4}>
                ¡Así de simple! Disfruta de envíos de primera clase con un{" "}
                <Text fontWeight="bold" as="span">
                  5%
                </Text>{" "}
                de descuento. Únete a nuestra comunidad en línea y ahorra
                mientras conectamos el mundo para ti. 🌐✨
              </Text>
              <Text mt={4}>
                No pierdas esta oportunidad. Síguenos hoy y comienza a ahorrar
                en tus envíos con EnviAhora.
              </Text>
            </Box>
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
          </Box>
        </>
      )}
    </>
  );
}
