"use client";

import {
  Box,
  useMediaQuery,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  HStack,
  Link,
} from "@chakra-ui/react";
import logo from "./assets/enviahora-img-Nav.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { CSSProperties } from "react";
import { TbMenu2 } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import NextLink from "next/link";

import React, { useEffect, useRef, useState } from "react";

const buttonVibration = {
  x: [0, -5, 5, -5, 5, 0], // Valores de posición en el eje X para la vibración
  transition: {
    duration: 0.3, // Duración de la animación en segundos
  },
};

interface Props {
  onClickAbout: () => void;
  onClickBonus: () => void;
  onClickCountries: () => void;
  onClickLogo: () => void;
}

const Navbar = ({
  onClickAbout,
  onClickBonus,
  onClickCountries,
  onClickLogo,
}: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const refElement = useRef<HTMLDivElement | null>(null);
  const [menuIconState, setMenuIconState] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Comprueba si el objetivo del evento de clic no está contenido en el elemento deseado
      if (
        refElement.current &&
        !refElement.current.contains(event.target as Node)
      ) {
        setMenuIconState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuIconState]);

  const controls = useAnimation();

  useEffect(() => {
    const animateVibration = async () => {
      while (true) {
        await controls.start({ rotate: -2 }); // Vibración hacia la izquierda
        await controls.start({ rotate: 2 }); // Vibración hacia la derecha
      }
    };

    animateVibration();

    // Detener la animación al desmontar el componente (si es necesario)
    return () => controls.stop();
  }, [controls]);

  const imageStyle: CSSProperties = {
    borderRadius: "50%",
    border: "1px solid #fff",
    cursor: "pointer",
    minWidth: "80px",
    minHeight: "80px",
  };

  const handleMenuClick = () => {
    setMenuIconState(!menuIconState);
  };

  const buttonStyle: CSSProperties = {
    width: isHigherThan480 ? "250px" : "120px",
    height: isHigherThan480 ? "60px" : "40px",
    fontSize: isHigherThan480 ? "25px" : "unset",
    color: "#ffffff",
    backgroundColor: "#ff6200",
    marginRight: "30px",
    borderRadius: "20px",
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex="999"
      p={isHigherThan480 ? "15px 40px" : "10px"}
      bgColor="#4d148c"
      maxWidth="100%"
      color="#ffffff"
      position={isHigherThan480 ? "unset" : "fixed"} // Cambia la posición a "fixed" cuando es mayor a 480px
      top={isHigherThan480 ? "unset" : 0} // Añade un valor "top" solo cuando es mayor a 480px
      width="100%" // Agrega esto para que ocupe todo el ancho en modo fijo
      boxShadow="0px 4px 6px rgba(150, 75, 0, 0.2)"
    >
      <Image
        alt="fedex-envio-logo-envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
        style={imageStyle}
        src={logo}
        width={isHigherThan480 ? 80 : 40}
        height={isHigherThan480 ? 90 : 40}
        onClick={onClickLogo}
      />
      <Box display="flex">
        <Link
          href="https://www.fedex.com/es-es/shipping/served-countries.html"
          isExternal
        >
          <motion.button style={buttonStyle} animate={controls}>
            Cotiza Ahora!
          </motion.button>
        </Link>
        {isHigherThan480 ? (
          <HStack gap="30px">
            <Text cursor="pointer" onClick={onClickAbout}>
              ¿Quienes somos?
            </Text>
            <Text cursor="pointer" onClick={onClickCountries}>
              Paises destino
            </Text>
            <Text cursor="pointer" onClick={onClickBonus}>
              Bonos
            </Text>
          </HStack>
        ) : (
          <Menu>
            <MenuButton
              ref={refElement}
              as={IconButton}
              aria-label="Options"
              onClick={handleMenuClick}
              icon={
                menuIconState ? <CgMenuMotion /> : <TbMenu2 color="#ffffff" />
              }
              variant="ghost"
            />
            <MenuList>
              <MenuItem
                _hover={{ bgColor: "#ff6200" }}
                color="#000000"
                cursor="pointer"
              >
                ¿Quienes somos?
              </MenuItem>
              <MenuItem color="#000000" cursor="pointer">
                Paises destino
              </MenuItem>
              <MenuItem color="#000000" cursor="pointer">
                Bonos
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
