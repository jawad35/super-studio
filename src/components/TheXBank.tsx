import { Box, Container, Flex, Heading, Button, Image } from "@chakra-ui/react";
import "swiper/css";
import { Link } from "react-router-dom";

function TheXBank() {

  return (
    <Box id="ecosystem">
      <Container maxW={{ base: "75%", md: "75%" }} mt={"60px"}>
      
        <Box
        display={"flex"}
        justifyContent="center"
        textAlign={"center"}
        flexDir={{base: "column", lg: "row"}}
         gap="15px"
          height="100%"
          width="100%"
          margin={"auto"}
          flexShrink={"1"}
        >
        <Flex
            borderColor={"#AD9057"}
            borderWidth="2px"
            borderRadius="10px"
            position={"relative"}
            overflow={"hidden"}
            padding={"25px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "32%" }}
            bgColor="black"
          >
           <Flex flexDir={"row"} gap={"10px"} margin={"auto"}>
            <Image src="img/btc.svg" maxW={"30px"} ></Image>
             <Heading
             marginTop={"6px"}
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              bgGradient="linear(to-r, #E3E3E3, #A8A9AD)"
              bgClip={"text"}
              fontSize={{ base: "15px", md: "25px" }}
            >
              Bitcoin
            </Heading>
            </Flex>
            <Flex id="buy" mt="18px" justify={"center"} wrap={"wrap"} gap="20px" flexDir={"row"}>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"red"} borderWidth={"0.5px"} borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
              >Продай</Button>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"#39FF14"} borderWidth={"0.5px"} 
              borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
                >Купи</Button>
            </Flex>
        </Flex>
        <Flex
            borderColor={"#AD9057"}
            borderWidth="2px"
            borderRadius="12px"
            position={"relative"}
            direction={"column"}
            overflow={"hidden"}
            padding={"25px"}
            height={"100%"}
            width={{ base: "100%", xl: "32%" }}
            bgColor="black"
          >
            <Flex flexDir={"row"} gap={"10px"} margin={"auto"}>
            <Image src="img/eth.svg" maxW={"30px"} ></Image>
             <Heading
             marginTop={"6px"}
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              bgGradient="linear(to-r, #E3E3E3, #A8A9AD)"
              bgClip={"text"}
              fontSize={{ base: "15px", md: "25px" }}
            >
              Ethereum
            </Heading>
            </Flex>
            <Flex id="buy" mt="18px" justify={"center"} wrap={"wrap"} gap="20px" flexDir={"row"}>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"red"} borderWidth={"0.5px"} borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
              >Продай</Button>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"#39FF14"} borderWidth={"0.5px"} 
              borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
                >Купи</Button>
            </Flex>
            <Flex>
          
            </Flex>
        </Flex>
        <Flex
            borderColor={"#AD9057"}
            borderWidth="2px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"25px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "35%" }}
            bgColor="black"
          >
           <Flex flexDir={"row"} gap={"10px"} margin={"auto"}>
            <Image src="img/usdt.svg" maxW={"30px"} ></Image>
             <Heading
             marginTop={"6px"}
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              bgGradient="linear(to-r, #E3E3E3, #A8A9AD)"
              bgClip={"text"}
              fontSize={{ base: "15px", md: "25px" }}
            >
              USDT
            </Heading>
            </Flex>
            <Flex id="buy" mt="18px" justify={"center"} wrap={"wrap"} gap="20px" flexDir={"row"}>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"red"} borderWidth={"0.5px"} borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
              >Продай</Button>
              <Button width={"35%"} textColor="white" bg={"transparent"} borderColor={"#39FF14"} borderWidth={"0.5px"} 
              borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                
                >Купи</Button>
            </Flex>
        </Flex>
        </Box>
      </Container>
      <Button width={"23.5%"} textColor="white" bg={"black"} borderColor={"transparent"} borderWidth={"0.5px"} borderRadius={"30px"} mt={"20px"} ml={"-35px"} padding={"25px"} fontWeight={"bold"}
                
                >Виж всички криптовалути</Button>
      </Box>
  );
}

export default TheXBank;
