import { Box } from "@chakra-ui/react";
import React from "react";
import RegisterWidget from "./RegisterWidget";

const RegisterHero: React.FC = () => {
  
  return (
    <Box position="relative" height={{base: "1400px", md: "1380px", sm: "1280px", lg: "1000px", "xl":"1150px"}}>
      <Box
        display={"flex"}
        alignItems={"end"}
        bgGradient="linear(to-r, white, white, white)"
        position="absolute"
        height={{ base: "1000px", md: "1200px", sm: "1000px", "lg":"400px", "xl":"500px"}}
      >
      </Box>
      <Box
        pos="absolute"
        top="0"
        right="0"
        mr={{ base: "1vw", md: "14.5vw" }}
        mt={{ base: "10vh", md: "20vh" }}
      >
         <RegisterWidget />
      </Box>
    </Box>
  );
};

export default RegisterHero;
