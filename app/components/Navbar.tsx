"use client";

import {
  Box,
  useMediaQuery,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  HStack,
} from "@chakra-ui/react";
import logo from "../assets/enviahora-img-Nav.png";
import Image from "next/image";

import { TbMenu2 } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";

import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
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

  const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
    cursor: "pointer",
  };

  const handleMenuClick = () => {
    setMenuIconState(!menuIconState);
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
      borderBottom="solid 4px black"
    >
      <Image
        alt="fedex-envio-logo"
        style={imageStyle}
        src={logo}
        width={isHigherThan480 ? 80 : 40}
        height={isHigherThan480 ? 90 : 40}
      />
      <Box display="flex">
        <Button
          width={isHigherThan480 ? "250px" : "120px"}
          height={isHigherThan480 ? "60px" : "40px"}
          fontSize={isHigherThan480 ? "25px" : "unset"}
          color="#ffffff"
          bgColor="#ff6200"
          mr="30px"
        >
          Cotiza Ahora!
        </Button>
        {isHigherThan480 ? (
          <HStack gap="30px">
            <Text cursor="pointer">¿Quienes somos?</Text>
            <Text cursor="pointer">Paises destino</Text>
            <Text cursor="pointer">Bonos</Text>
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
