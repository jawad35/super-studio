import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const CountdownCard = () => {

  return (
    <Box
      textAlign="center"
      m="auto"
      p="20px"
      w="90%"
    >
      <Flex
        justify="center"
        alignItems="center"
        gap={2}
        color="red"
        wrap={"wrap"}
        bg={"white"}
        borderRadius={"40px"}
      >
        <Button width={"52%"} textColor="white" bg={"#d8b519"} borderRadius={"30px"} padding={"25px"} fontWeight={"bold"}
            >Купи</Button>
            <Button width={"45%"} textColor="black" bg={"white"} borderRadius={"30px"} padding={"25px"} fontWeight={"bold"}
            >Продай</Button>
      </Flex>
          

    </Box>
  );
};

export default CountdownCard;
