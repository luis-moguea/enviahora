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

import React, { useEffect, useRef, useState } from "react";

const buttonVibration = {
  x: [0, -5, 5, -5, 5, 0],
  transition: {
    duration: 0.3,
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
    minWidth: isHigherThan480 ? "80px" : "90px",
    minHeight: isHigherThan480 ? "80px" : "90px",
  };

  const handleMenuClick = () => {
    setMenuIconState(!menuIconState);
  };

  const buttonStyle: CSSProperties = {
    width: isHigherThan480 ? "250px" : "210px",
    height: isHigherThan480 ? "60px" : "50px",
    fontSize: isHigherThan480 ? "25px" : "20px",
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
      zIndex="9999"
      p={isHigherThan480 ? "15px 40px" : "10px"}
      minHeight={isHigherThan480 ? "unset" : "160px"}
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
        width={isHigherThan480 ? 80 : 90}
        height={isHigherThan480 ? 80 : 90}
        onClick={onClickLogo}
      />
      <Box display="flex" alignItems="center">
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
              ¿Quiénes somos?
            </Text>
            <Text cursor="pointer" onClick={onClickCountries}>
              Países destino
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
                menuIconState ? (
                  <CgMenuMotion fontSize={isHigherThan480 ? "unset" : "50px"} />
                ) : (
                  <TbMenu2
                    fontSize={isHigherThan480 ? "unset" : "50px"}
                    color="#ffffff"
                  />
                )
              }
              variant="ghost"
            />
            <MenuList>
              <MenuItem
                _hover={{ bgColor: "#ff6200" }}
                color="#000000"
                cursor="pointer"
                onClick={onClickAbout}
              >
                ¿Quienes somos?
              </MenuItem>
              <MenuItem
                color="#000000"
                cursor="pointer"
                onClick={onClickCountries}
              >
                Paises destino
              </MenuItem>
              <MenuItem color="#000000" cursor="pointer" onClick={onClickBonus}>
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
