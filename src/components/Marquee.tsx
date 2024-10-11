import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <Box
      w="100%"
      overflow="hidden"
      pt="5px"
      pb="0px"
      bg="black"
      color="transparent"
      letterSpacing={"2px"}
      fontSize={"34px"}
      css={{
        textFill: "transparent",
        WebkitTextFillColor: "transparent", // For Safari
        textStroke: "0.5px white",
        WebkitTextStroke: "0.5px white", // For Safari
      }}
    >
      <motion.div
        style={{
          whiteSpace: "nowrap",
          display: "inline-block",
        }}
        animate={{ x: [1000, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      >
        <Flex gap="8px" align="center" ml="-40%">
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">КУПИ КРИПТОВАЛУТА</Text>
          <Text mb="0px" fontSize={"28px"}>
            .
          </Text>
          <Text mb="0px">ПРОДАЙ КРИПТОВАЛУТА</Text>
        </Flex>

        <Flex></Flex>
      </motion.div>
    </Box>
  );
};

export default Marquee;
