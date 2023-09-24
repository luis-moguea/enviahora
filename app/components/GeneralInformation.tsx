"use client";

import { Box, useMediaQuery, Text } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface Props {
  text: string;
  image: StaticImageData | string;
  alt: string;
}

const GeneralInformation = ({ image, text, alt }: Props) => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Box
      display={isHigherThan480 ? "flex" : "block"}
      mb="20px"
      p={isHigherThan480 ? "40px" : "20px"}
    >
      <Image
        alt={alt}
        src={image}
        height={isHigherThan480 ? 600 : 70}
        width={isHigherThan480 ? 400 : 40}
      />
      <Text p={isHigherThan480 ? "20px" : "10px"}>{text}</Text>
    </Box>
  );
};

export default GeneralInformation;
