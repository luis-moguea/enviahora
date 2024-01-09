import { Box, Text, Icon, useMediaQuery } from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

const FaqComp = () => {
  const [isHigherThan480] = useMediaQuery("(min-width: 480px)");
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);
  const [showAnswer4, setShowAnswer4] = useState(false);
  const [showAnswer5, setShowAnswer5] = useState(false);

  const handleShowAnswer1 = () => {
    setShowAnswer1(!showAnswer1);
  };

  const handleShowAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };

  const handleShowAnswer3 = () => {
    setShowAnswer3(!showAnswer3);
  };

  const handleShowAnswer4 = () => {
    setShowAnswer4(!showAnswer4);
  };

  const handleShowAnswer5 = () => {
    setShowAnswer5(!showAnswer5);
  };

  const expStyle: CSSProperties = {
    textAlign: "center",
    color: "#ff6200",
    width: "100%",
    fontSize: isHigherThan480 ? "36px" : "32px",
  };

  return (
    <Box
      mb="40px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      mt="40px"
      p={isHigherThan480 ? "unset" : "20px"}
    >
      <Box>
        <motion.h2
          style={expStyle}
          animate={{
            color: "#ff6200",
            y: [0, -10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        >
          Preguntas Frecuentes
        </motion.h2>
      </Box>
      <Box
        mt="20px"
        w={isHigherThan480 ? "40%" : "100%"}
        display="flex"
        flexDir="column"
        alignSelf="center"
        justifyContent="center"
        border="solid 1px #4d148c"
        borderRadius="15px"
        p={isHigherThan480 ? "40px" : "20px"}
      >
        <Box
          onClick={handleShowAnswer1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
        >
          <Text fontSize="18px" fontWeight="bold">
            ¿Puedo realizar envíos internacionales sin factura?
          </Text>
          <Icon
            ml="7px"
            color={showAnswer1 ? "#ff6200" : "#4d148c"}
            cursor="pointer"
            onClick={handleShowAnswer1}
            as={showAnswer1 ? IoIosArrowDown : IoIosArrowUp}
          ></Icon>
        </Box>
        {showAnswer1 && (
          <Text
            border="solid 1px #ff6200"
            borderRadius="12px"
            padding="15px"
            textAlign="center"
            width={isHigherThan480 ? "70%" : "85%"}
            alignSelf="center"
            mt="10px"
            fontStyle="italic"
          >
            Sí, en Enviahora podemos generar la factura comercial para tu envío.
          </Text>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="15px"
          onClick={handleShowAnswer2}
          cursor="pointer"
        >
          <Text fontSize="18px" fontWeight="bold">
            ¿Puedo enviar alimentos y dulces a Estados Unidos?
          </Text>
          <Icon
            ml="7px"
            color={showAnswer2 ? "#ff6200" : "#4d148c"}
            cursor="pointer"
            onClick={handleShowAnswer2}
            as={showAnswer2 ? IoIosArrowDown : IoIosArrowUp}
          ></Icon>
        </Box>
        {showAnswer2 && (
          <Text
            border="solid 1px #ff6200"
            borderRadius="12px"
            padding="15px"
            textAlign="center"
            width={isHigherThan480 ? "70%" : "85%"}
            alignSelf="center"
            mt="10px"
            fontStyle="italic"
          >
            Sí, pero necesitas el registro Invima y permiso de la FDA, que
            gestionamos.
          </Text>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={handleShowAnswer3}
          cursor="pointer"
          mt="15px"
        >
          <Text fontSize="18px" fontWeight="bold">
            ¿Puedo enviar medicamentos a Estados Unidos?
          </Text>
          <Icon
            ml="7px"
            color={showAnswer3 ? "#ff6200" : "#4d148c"}
            cursor="pointer"
            onClick={handleShowAnswer3}
            as={showAnswer3 ? IoIosArrowDown : IoIosArrowUp}
          ></Icon>
        </Box>
        {showAnswer3 && (
          <Text
            border="solid 1px #ff6200"
            borderRadius="12px"
            padding="15px"
            textAlign="center"
            width={isHigherThan480 ? "70%" : "85%"}
            alignSelf="center"
            mt="10px"
            fontStyle="italic"
          >
            Sí, pero se requieren requisitos específicos de la FDA.
          </Text>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="15px"
          onClick={handleShowAnswer4}
          cursor="pointer"
        >
          <Text fontSize="18px" fontWeight="bold">
            ¿Puedo enviar productos con refrigeración?
          </Text>
          <Icon
            ml="7px"
            color={showAnswer4 ? "#ff6200" : "#4d148c"}
            cursor="pointer"
            onClick={handleShowAnswer4}
            as={showAnswer4 ? IoIosArrowDown : IoIosArrowUp}
          ></Icon>
        </Box>
        {showAnswer4 && (
          <Text
            border="solid 1px #ff6200"
            borderRadius="12px"
            padding="15px"
            textAlign="center"
            width={isHigherThan480 ? "70%" : "85%"}
            alignSelf="center"
            mt="10px"
            fontStyle="italic"
          >
            Sí, aunque no tenemos cadena de frío, sugerimos usar hielo seco o
            gel refrigerante.
          </Text>
        )}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="15px"
          onClick={handleShowAnswer5}
          cursor="pointer"
        >
          <Text fontSize="18px" fontWeight="bold">
            ¿Puedo enviar productos de cuidado personal?
          </Text>
          <Icon
            ml="7px"
            color={showAnswer5 ? "#ff6200" : "#4d148c"}
            cursor="pointer"
            onClick={handleShowAnswer5}
            as={showAnswer5 ? IoIosArrowDown : IoIosArrowUp}
          ></Icon>
        </Box>
        {showAnswer5 && (
          <Text
            border="solid 1px #ff6200"
            borderRadius="12px"
            padding="15px"
            textAlign="center"
            width={isHigherThan480 ? "70%" : "85%"}
            alignSelf="center"
            mt="10px"
            fontStyle="italic"
          >
            Sí, siempre que tengan el registro Invima o sanitario necesario.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default FaqComp;
