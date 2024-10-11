import {
    Box,
    Flex,
    Heading
  } from "@chakra-ui/react";
  import React from "react";
  
  const Auditos = () => {
    return (
      <Box
        textAlign="left"
        w="100%"
        color={"black"}
        px={{ base: "20px", sm: "20px", md: "50px", lg: "50px", xl: "250px"}}
        minH={{
          base: "15500",
          sm: "12700",
          md: "13700",
          lg: "13000",
          xl: "11000"
         }}
        h={{ 
          base: "1650px", 
          sm: "1850px", 
          md: "1800px",
          lg: "1650px",
           }}
        pt={{
          base: "35%",
          sm: "25%",
          md: "18%",
          lg: "15%",
          xl: "13%",
          "2xl": "180px",
        }}
      >
        <Flex direction={"column"} justify={"cetner"} mx="auto" maxW="1468px">
          <Heading
            fontSize={{ base: "35", sm: "45px", md: "55px" }}
            fontFamily={"Syne"}
            lineHeight={"50px"}
          >
         Terms & Conditions
          </Heading>
          </Flex> 
      </Box>
    );
  };
  
  export default Auditos;
  
