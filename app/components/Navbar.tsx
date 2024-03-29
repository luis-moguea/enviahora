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
import logo from "./assets/enviahora-img-Nav-png.png";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { CSSProperties } from "react";
import { TbMenu2 } from "react-icons/tb";
import { CgMenuMotion } from "react-icons/cg";
import WaLogo from "./images/WaLogo";

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
        await controls.start({ rotate: -2 });
        await controls.start({ rotate: 2 });
      }
    };

    animateVibration();

    // Detener la animación al desmontar el componente (si es necesario)
    return () => controls.stop();
  }, [controls]);

  const imageStyle: CSSProperties = {
    cursor: "pointer",
    minWidth: isHigherThan480 ? "80px" : "90px",
    minHeight: isHigherThan480 ? "80px" : "70px",
  };

  const handleMenuClick = () => {
    setMenuIconState(!menuIconState);
  };

  const phoneNumber = "+573024567533";

  const handleCall = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    window.location.href = phoneUrl;

    console.log("call ok");
  };

  const buttonStyle: CSSProperties = {
    width: isHigherThan480 ? "250px" : "160px",
    height: isHigherThan480 ? "60px" : "50px",
    fontSize: isHigherThan480 ? "25px" : "18px",
    marginLeft: isHigherThan480 ? "unset" : "15px",
    color: "#ffffff",
    backgroundColor: "#ff6200",
    marginRight: "30px",
    borderRadius: "20px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textDecoration: "none",
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex="9999"
      p={isHigherThan480 ? "15px 40px" : "30px"}
      minHeight={isHigherThan480 ? "unset" : "160px"}
      bgColor="rgba(255, 255, 255, 0.8)"
      maxWidth="100%"
      color="#ffffff"
      position={isHigherThan480 ? "unset" : "fixed"}
      top={isHigherThan480 ? "unset" : 0}
      width="100%"
      boxShadow="0px 4px 6px rgba(150, 75, 0, 0.2)"
    >
      <Image
        alt="fedex-envio-logo-envios-internacional-ship-shipment-baratos-estados-unidos-rapidos"
        style={imageStyle}
        src={logo}
        width={isHigherThan480 ? 80 : 90}
        height={isHigherThan480 ? 60 : 90}
        onClick={onClickLogo}
      />

      <Box display="flex" alignItems="center">
        <Link href="https://wa.me/573024567533" isExternal>
          <motion.button style={buttonStyle} animate={controls}>
            <WaLogo />
            Asesoría
          </motion.button>
        </Link>

        {isHigherThan480 ? (
          <HStack gap="30px">
            <Text color="#4d148c" cursor="pointer" onClick={onClickAbout}>
              ¿Quiénes somos?
            </Text>
            <Text color="#4d148c" cursor="pointer" onClick={onClickCountries}>
              Países destino
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
                  <CgMenuMotion
                    color="#4d148c"
                    fontSize={isHigherThan480 ? "unset" : "50px"}
                  />
                ) : (
                  <TbMenu2
                    fontSize={isHigherThan480 ? "unset" : "50px"}
                    color="#4d148c"
                  />
                )
              }
              variant="ghost"
            />
            <MenuList>
              <MenuItem
                _hover={{ bgColor: "#ff6200" }}
                color="#4d148c"
                cursor="pointer"
                onClick={onClickAbout}
              >
                ¿Quienes somos?
              </MenuItem>
              <MenuItem
                color="#4d148c"
                cursor="pointer"
                onClick={onClickCountries}
              >
                Paises destino
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
