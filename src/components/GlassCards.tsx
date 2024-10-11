import { Box, Container, Flex, Heading, Text, Image, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsJustify } from "react-icons/bs";

function GlassCards() {
  const btnClicked = () => {};

  return (
    <Box mt="30px">
      <Container maxW={{ base: "80%", md: "80%" }}>
      <Heading
        fontFamily="Syne"
        textTransform="uppercase"
        fontSize={{ base: "30px", md: "40px" }}
        letterSpacing="5px"
        color="black"
      >
        TOKENOMICS
      </Heading>
        <Flex
          gap="20px"
          mt="20px"
          height="100%"
          width="100%"
          align={"center"}
          wrap={"wrap"}
          flexDirection={"row"}
          justify={{ base: "center", xl: "space-between" }}
        >
          <Flex
            borderColor="black"
            borderWidth="1px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"40px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "32%" }}
            bgColor="black"
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              color={"white"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              Automatic LP
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"#39FF14"}
              fontSize="10px"
            >
              Stable Price, Parabolic Rise.
            </Text>
            <Image src="img/logo.png" w="200px" mt="-20px" cursor="pointer" alignSelf={"center"} pt={"10px"}></Image>
            <Text
              marginTop={"15px"}
              color={"white"}
              fontSize={"17px"}
              maxW="320px"
              mx="auto"
            >
             2% of every buy and 2% of every sell transaction is automatically added to the liquidity pool.
            </Text>
            <Box display={"flex"} justifyContent={"center"} gap={"10px"}>
            </Box>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </Flex>
          <Flex
            borderColor="black"
            borderWidth="1px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"40px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "32%" }}
            bgColor="black"
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              color={"white"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              Marketing
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"#FFE400"}
              fontSize="10px"
            >
              Strong Marketing, Much Moon
            </Text>
            <Image src="img/logo.png" w="200px" mt="-20px" cursor="pointer" alignSelf={"center"} pt={"10px"} justifyContent={"center"} alignItems={"center"}></Image>
            <Text
              marginTop={"15px"}
              color={"white"}
              fontSize={"17px"}
              maxW="320px"
              mx="auto"
            >
              2% of every buy and 2% of every sell transaction is automatically added to the marketing budget.
            </Text>
        </Flex>
          <Flex
            borderColor="black"
            borderWidth="1px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"40px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "32%" }}
            bgColor="black"
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="4px"
              color={"white"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              THE X DOGE
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"AQUA"}
              fontSize="10px"
            >
              MOONSHOT OF THE YEAR
            </Text>
            <Image src="img/logo.png" w="200px" mt="-20px" cursor="pointer" alignSelf={"center"} pt={"10px"}></Image>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"white"}
              fontSize="10px"
              paddingTop={"20px"}
              paddingBottom={"10px"}
            >
              READ THE WHITEPAPER
            </Text>
            <Flex gap={"20px"} justify={"center"}>
            <Button
              bgGradient="linear(to-r, #FEEE00, #F6B700)"
              color="white"
              borderRadius={"25px"}
              w="130px"
              h="50px"
            >
            Buy now
            </Button>
            <Button
              bgGradient="linear(to-r, aqua, blue)"
              color="white"
              borderRadius={"25px"}
              w="130px"
              h="50px"
            >
            Whitepaper
            </Button>
            </Flex>
        </Flex>
        <Flex
            borderColor="black"
            borderWidth="1px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"40px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "48%" }}
            bgColor="black"
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              color={"white"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              NFT Collection
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"#008FFF"}
              fontSize="10px"
              pb="50px"
            >
              Earn USDT by holding $THEXDOGE NFT
            </Text>
            <Box
             margin={"auto"}
              maxH="600px"
              maxW="400px"
              bgGradient="linear(to-b, #171717, black)"
              p="10px"
              borderRadius="30px"
              padding={"10px"}
            ><Image src="img/SO.png" alt="nft" borderRadius="12px" marginTop={"-60px"} marginLeft={"45px"} width={"250px"} height={"250px"}></Image>
              <Box
              maxH="700px"
              maxW="400px"
              bgGradient="linear(to-r,black , black )"
              p="20px"
              pb="5px"
              pt="5px"
              borderRadius="30px"
            ><Text fontFamily={"syne"} fontSize={{ base:"20px", lg:"20px"}} color={"white"} textTransform={"uppercase"} fontWeight={"700"}>The X Doge</Text>
            <Flex justifyContent={"center"} gap="15px">
            <Flex>
            <Text fontFamily={"syne"} fontSize={{ base:"10px", lg:"18px"}}  
            color={"white"} fontWeight={"600"}>Multiplier:</Text> <Text fontSize={{ base:"10px", lg:"18px"}} fontFamily={"syne"} fontWeight={"700"} color={"aqua"}> 80x</Text></Flex>
            <Flex justify={"center"} alignContent={"center"} gap={"3px"}>
            <Image src="img/Crossed-Swords.png" width={"18px"} height={"18px"} marginTop={"4px"}>
              </Image><Text fontFamily={"syne"} fontSize={{ base:"10px", lg:"18px"}}  
            color={"white"} fontWeight={"600"}>Investment:</Text> 
            <Text fontSize={{ base:"10px", lg:"18px"}}   fontFamily={"syne"} fontWeight={"700"} color={"#39FF14"} >+A</Text></Flex></Flex>
            </Box>
            </Box>
            <Text
              marginTop={"15px"}
              color={"white"}
              fontSize={"17px"}
              maxW="400px"
              mx="auto"
            >
              2% of every sell transaction is automatically distributed to the people who hold The X Doge NFTs.
            </Text>
            <Box display={"flex"} justifyContent={"center"} gap={"10px"} paddingTop={"10px"}>
            <Button
              bgGradient="linear(to-r, aqua, blue)"
              color="white"
              borderRadius={"25px"}
              w="130px"
              h="50px"
            >
            Learn more
            </Button>
            </Box>
        </Flex>
          <Flex
            borderColor="black"
            borderWidth="1px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            padding={"40px"}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "48%" }}
            bgColor="black"
          >
            <Heading
              fontFamily="Syne"
              fontWeight="700"
              textTransform="uppercase"
              letterSpacing="5px"
              color={"white"}
              fontSize={{ base: "20px", md: "30px" }}
            >
              The X Bank
            </Heading>
            <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"#FFD800"}
              fontSize="10px"
            >
              Earn USDT by staking $THEXDOGE
            </Text>
            <video width="900px" autoPlay loop muted>
          <source src="vid/TheXBank.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
            <Text
              marginTop={"15px"}
              color={"white"}
              fontSize={"17px"}
              maxW="320px"
              mx="auto"
            >
              2% of every buy and 2% of every sell transaction is automatically distributed to the people who stake in The X Bank.
            </Text>
            <Box display={"flex"} justifyContent={"center"} gap={"20px"} paddingTop={"10px"}>
            <Button
              bgGradient="linear(to-r, #FEEE00, #F6B700)"
              color="white"
              borderRadius={"25px"}
              w="130px"
              h="50px"
            >
            Dashboard
            </Button>
            <Button
              bgGradient="linear(to-r, aqua, blue)"
              color="white"
              borderRadius={"25px"}
              w="130px"
              h="50px"
            >
            Learn more
            </Button>
            </Box>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
        </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default GlassCards;
