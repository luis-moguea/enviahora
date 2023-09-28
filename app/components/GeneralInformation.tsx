"use client";

import { Box, useMediaQuery, Text, Icon } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import { BsFillStarFill } from "react-icons/bs";

interface Props {
  text: string;
  image: StaticImageData | string;
  alt: string;
  ml: string;
}

const GeneralInformation = ({ image, text, alt, ml }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  const imageStyle: CSSProperties = {
    width: "100%",
    cursor: "pointer",
    borderRadius: "50%",
    objectFit: "cover",
  };

  return (
    <Box
      boxShadow="0px 4px 8px rgba(77, 20, 140, 0.5)" // Ajusta estos valores según tus preferencias
      borderRadius="10px"
      display="flex"
      p="28px"
      ml={ml}
    >
      <Box
        padding="10px"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
      >
        <Image alt={alt} src={image} style={imageStyle} />
        <Text whiteSpace="nowrap" fontStyle="oblique">
          Luis M.
        </Text>
      </Box>
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
            fontSize="14px"
            fontStyle="italic"
            color="#5d5d5d"
            lineHeight="1.3"
            p={isHigherThan480 ? "20px 0 20px 20px" : "10px"}
            textAlign="right"
          >
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralInformation;