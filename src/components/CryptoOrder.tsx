import { Box } from "@chakra-ui/react";
import React from "react";
import OrderWidget from "./OrderWidget";

const CryptoOrder: React.FC = () => {
  
  return (
    <Box position="relative" height={{base: "1400px", md: "1380px", sm: "1280px", lg: "1000px", "xl":"890px"}}>
      <Box
        display={"flex"}
        alignItems={"end"}
        position="absolute"
        height={{ base: "1000px", md: "1200px", sm: "1000px", "lg":"400px", "xl":"785px"}}
      >
      </Box>
      <Box
        pos="absolute"
        top="0"
        right="0"
        mr={{ base: "1vw", md: "12vw" }}
        mt={{ base: "10vh", md: "6vh" }}
      >
        <OrderWidget />
      </Box>
    </Box>
  );
};

export default CryptoOrder;
