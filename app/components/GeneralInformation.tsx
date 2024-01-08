"use client";

import { Box, useMediaQuery, Text, Icon } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import { BsFillStarFill } from "react-icons/bs";
import "../../app/globals.css";

interface Props {
  text: string;
  image: StaticImageData | string;
  alt: string;
  ml: string;
  name: string;
}

const GeneralInformation = ({ image, text, alt, name, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    maxWidth: "80px",
    maxHeight: "80px",
    cursor: "pointer",
    borderRadius: "40px",
    objectFit: "cover",
  };

  return (
    <Box
      boxShadow="0px 4px 8px rgba(77, 20, 140, 0.5)" // Ajusta estos valores según tus preferencias
      borderRadius="10px"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      p="28px"
      ml={ml}
      minW="250px"
      minH="300px"
      maxW="250px"
      maxH="300px"
    >
      <Box>
        <Box display="flex" justifyContent="flex-end">
          <Icon as={BsFillStarFill} w={4} h={3} color="#ffbf00"></Icon>
          <Icon as={BsFillStarFill} w={4} h={3} color="#ffbf00"></Icon>
          <Icon as={BsFillStarFill} w={4} h={3} color="#ffbf00"></Icon>
          <Icon as={BsFillStarFill} w={4} h={3} color="#ffbf00"></Icon>
          <Icon as={BsFillStarFill} w={4} h={3} color="#ffbf00"></Icon>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Text
            fontSize={isHigherThan480 ? "14px" : "16px"}
            fontStyle="italic"
            fontWeight="bold"
            color="#5d5d5d"
            lineHeight="1.3"
            p={isHigherThan480 ? "20px 0 20px 0px" : "10px 0 10px 0px"}
            textAlign="right"
            mt="10px"
          >
            {text}
          </Text>
        </Box>
      </Box>
      <Text
        mt="15px"
        textAlign="right"
        fontWeight="bold"
        whiteSpace="nowrap"
        fontStyle="oblique"
      >
        {name}
      </Text>
    </Box>
  );
};

export default GeneralInformation;
