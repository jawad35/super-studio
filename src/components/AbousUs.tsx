import { Box, Container, Flex, Heading, Text, Image, Button, Switch, Stack, Link,  
    Divider } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsJustify } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import LeftSide from "./LeftSide";

function AboutUs() {
  const btnClicked = () => {};

  return (
    <Box mt="30px">
      <Container maxW={{ base: "80%", md: "100%" }}>
      <Heading
        fontWeight={"700"}
        textTransform="uppercase"
        fontSize={{ base: "30px", md: "32px" }}
        letterSpacing="4px"
        color="white"
        pb={"10px"}
      >
      ЗА НАС
      </Heading>
      <Box color={"white"} p="10px">
            <Box
              display={"flex"}
              alignItems={"center"}
              marginBottom={"10px"}
              justifyContent={"center"}
              gap={"10px"}
              width={"100%"}
            >
              <Box width={"20%"} >
                <Divider borderColor={"#fcc400"} mt={"4px"} />
              </Box>
              <Text textTransform={"uppercase"} fontWeight={"300"} fontSize={"14px"}>ЗА SUPERIOR STUDIO</Text>
              <Box width={"20%"}>
                <Divider borderColor={"#fcc400"} mt={"4px"}/>
              </Box>
            </Box>
            </Box>
      <Text
        fontWeight={"400"}
        fontSize={{ base: "12px", md: "16px" }}
        letterSpacing="1px"
        color="white"
        pb={"10px"}
      >
      Дигитална Агенция Superior Studio
      </Text>
      <Flex justify={{ base: "center", xl: "center" }}>
      <Stack direction='row'>
</Stack></Flex>

        <Flex
          gap="20px"
          mt="20px"
          width="100%"
          align={"center"}
          wrap={"wrap"}
          flexDirection={"row"}
          justify={{ base: "center", xl: "center" }}
        >
          <Flex
            borderRadius="20px"
            position={"relative"}
            overflow={"hidden"}
            padding={"30px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "25%" }}
            bg={"white"} 
            color={"black"}
    
          >
            <Heading
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "20px" }}
            >
              Изработка на сайт
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              fontSize="11px"
            >
            подходящ за презентационни уеб-сайтове
            </Text>
            <Heading
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
              mb={"20px"}
            >
            САМО ЗА 1099 лв.
            </Heading>
            <Flex justify={"center"} mt={"20px"} mb={"10px"}>
          <Link href="/Login" style={{textDecoration:'none', width: "100%"}}><Button textTransform={"uppercase"} fontSize="14px" bg={"black"} color={"white"} borderRadius={"30px"} padding={"25px"} fontWeight={"600"} _hover={{
        bgGradient: "linear(to-b, #171717, #171717)",
      }} >Поръчай сега!</Button></Link>
        </Flex>
        </Flex>
        <Flex
            borderRadius="20px"
            position={"relative"}
            overflow={"hidden"}
            padding={"30px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "25%" }}
            bg={"white"} 
            color={"black"}
    
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
            >
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              fontSize="11px"
            >
            подходящ за презентационни уеб-сайтове
            </Text>
            <Heading
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
              mb={"20px"}
            >
            САМО ЗА 1099 лв.
            </Heading>
            <Flex justify={"center"} mt={"20px"} mb={"10px"}>
          <Link href="/Login" style={{textDecoration:'none', width: "100%"}}><Button textTransform={"uppercase"} fontSize="16px" bg={"black"} color={"white"} borderRadius={"30px"} padding={"25px"} fontWeight={"600"} _hover={{
        bgGradient: "linear(to-b, #171717, #171717)",
      }} >Поръчай сега!</Button></Link>
        </Flex>
        </Flex>
        <Flex
            borderRadius="20px"
            position={"relative"}
            overflow={"hidden"}
            padding={"30px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "25%" }}
            bg={"white"} 
            color={"black"}
    
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
            >
              WEB + SEO Basic
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              fontSize="11px"
            >
            подходящ за презентационни уеб-сайтове
            </Text>
            <Heading
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
              mb={"20px"}
            >
            САМО ЗА 1099 лв.
            </Heading>
            <Flex justify={"center"} mt={"20px"} mb={"10px"}>
          <Link href="/Login" style={{textDecoration:'none', width: "100%"}}><Button textTransform={"uppercase"} fontSize="16px" bg={"black"} color={"white"} borderRadius={"30px"} padding={"25px"} fontWeight={"600"} _hover={{
        bgGradient: "linear(to-b, #171717, #171717)",
      }} >Поръчай сега!</Button></Link>
        </Flex>
        </Flex>
         </Flex>
      </Container>
    </Box>
  );
}

export default AboutUs;
