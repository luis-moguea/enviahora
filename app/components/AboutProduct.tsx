"use client";

import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import ProductImage from "./images/ProductImage";

const AboutProduct = () => {
  return (
    <Box display="flex" p="80px" justifyContent="center">
      <Box width="50%">
        <Heading as="h2">
          No importa lo que necesites enviar, nosotros te lo llevamos con la
          mejor empresa en el campo, ¡Fedex!
        </Heading>
        <List mt="20px" width="500px">
          <ListItem as="li" mt="10px">
            ¡Envíos con el costo más competitivo del mercado!
          </ListItem>
          <ListItem as="li" mt="10px">
            Seguimiento en tiempo real de sus envíos internacionales.
          </ListItem>
          <ListItem as="li" mt="10px">
            Para tu tranquilidad te brindamos facturación electrónica de la Dian
          </ListItem>
          <ListItem as="li" mt="10px">
            Tiempo de entrega de tus envíos en tiempos muy cortos!
          </ListItem>
          <ListItem as="li" mt="10px">
            Y lo mejor es que siempre recogeremos tu paquete para que no tengas
            que dejar la comodidad de tu hogar!
          </ListItem>
        </List>
      </Box>
      <Box>
        <ProductImage />
      </Box>
    </Box>
  );
};

export default AboutProduct;
