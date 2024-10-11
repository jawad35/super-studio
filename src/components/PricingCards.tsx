import { Box, Container, Flex, Heading, Text, Image, Button, Switch, Stack, Link,  
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsJustify } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import LeftSide from "./LeftSide";
import FancyText from '@carefully-coded/react-text-gradient';


function PricingCards() {
  const btnClicked = () => {};

  return (
    <Box mt="30px">
      <Container maxW={{ base: "90%", md: "100%" }}>
      <Heading
        fontWeight={"700"}
        textTransform="uppercase"
        fontSize={{ base: "30px", md: "32px" }}
        letterSpacing="4px"
        color="white"
        pb={"10px"}
      >
       ЦЕНИ
      </Heading>
      <FancyText
          style={{fontSize: '14px', paddingBottom: "25px", letterSpacing: "4px", textTransform: "uppercase", margin: "auto"}}
      gradient={{ from: '#FCC400', to: 'white', type: 'linear' }}
      animateTo={{ from: 'white', to: '#fcc400' }}
      animateDuration={1000}
    >
     Изберете оферта, която ви допада
    </FancyText>
      <Flex justify={{ base: "center", xl: "center" }}>
      <Stack direction='row'>
  <Switch colorScheme='yellow' size='lg' />
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
            borderRadius="35px"
            position={"relative"}
            overflow={"hidden"}
            padding={"38px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "27%" }}
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
              WEB
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              fontSize="11px"
            >
            подходящ за визитка
            </Text>
            <Heading
              fontWeight="800"
              textTransform="uppercase"
              letterSpacing="5px"
              fontSize={{ base: "20px", md: "24px" }}
              mb={"20px"}
            >
            САМО ЗА 899 лв.
            </Heading>
            <Flex justify={"center"} mt={"20px"} mb={"10px"}>
          <Link href="/Login" style={{textDecoration:'none', width: "100%"}}><Button textTransform={"uppercase"} fontSize="16px" bg={"black"} color={"white"} borderRadius={"30px"} padding={"25px"} fontWeight={"600"} _hover={{
        bgGradient: "linear(to-b, #171717, #171717)",
      }} >Поръчай сега!</Button></Link>
        </Flex>
        </Flex>
        <Flex
            borderRadius="35px"
            position={"relative"}
            overflow={"hidden"}
            padding={"38px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "27%" }}
            bg={"#FCC400"} 
            color={"white"}
    
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
            САМО ЗА 1499 лв.
            </Heading>
            <Flex justify={"center"} mt={"20px"} mb={"10px"}>
          <Link href="/Login" style={{textDecoration:'none', width: "100%"}}><Button textTransform={"uppercase"} fontSize="16px" bg={"white"} color={"black"} borderRadius={"30px"} padding={"25px"} fontWeight={"600"} _hover={{
        bgGradient: "linear(to-b, #171717, #171717)",
      }} >Поръчай сега!</Button></Link>
        </Flex>
        </Flex>
        <Flex
            borderRadius="35px"
            position={"relative"}
            overflow={"hidden"}
            padding={"38px"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "27%" }}
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
              Product Web + SEO
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
            САМО ЗА 2199 лв.
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

export default PricingCards;
