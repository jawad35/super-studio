import { Box, Container, Flex, Heading, Text, Image, Button} from "@chakra-ui/react";
import "swiper/css";
import React from "react";
import { Link } from "react-router-dom";

function Ecosystem() {

  return (
    <Box id="ecosystem">
      <Container maxW={{ base: "90%", md: "90%" }}>
      <Flex
           
            borderColor="black"
            borderWidth="2px"
            borderRadius="12px"
            position={"relative"}
            overflow={"hidden"}
            p={{ base: "20px", md: "50px" }}
            height={"100%"}
            direction={"column"}
            justify={"between"}
            width={{ base: "100%", xl: "100%" }}
            backgroundImage={"url('/img/Layer1.png')"}
            bgPosition={"right"}
            bgSize={"1300px"}
            bgColor="black"
            flexShrink={"1"}
          >
            <Image
            src="img/doge1.PNG"
            pos="absolute"
            height={{ base: "60px", "sm":"80px", "md":"140px", lg: "170px", "xl":"240px"}}
            right="0px"
            bottom={"-10px"}
          />
          <Image
            src="img/doge3.PNG"
            pos="absolute"
            height={{ base: "60px", "sm":"80px", "md":"140px", lg: "170px", "xl":"240px"}}
            left="0px"
            bottom={"-10px"}
          />
          <Image
            src="img/doge4.PNG"
            pos="absolute"
            height={{ base: "60px", "sm":"80px", "md":"110px", lg: "140px", "xl":"180px"}}
            right="0px" 
            top={"-10px"}
          />
          <Image
            src="img/doge5.PNG"
            pos="absolute"
            height={{ base: "60px","sm":"80px", "md":"110px", lg: "140px", "xl":"180px"}}
            left="0px"
            top={"-10px"}
          />
          <Box justifyContent={"center"} maxW={"765px"} alignSelf={"center"} paddingTop={"39px"}>
            <Heading
          fontFamily="Syne"
          fontWeight="700"
          textTransform="uppercase"
          letterSpacing="5px"
          color={"white"}
          fontSize={{ base: "30px", md: "40px" }}
        >
          The X Doge
        </Heading>
        <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"gold"}
              fontSize="10px"
            >
            Multi-Purpose Innovative Defi Project
            </Text>
            <Text
          textAlign={"center"}
          pt="20px"
          pb="30px"
          fontSize="14px"
          color="#FFF"
        >
          The X Doge is a community-driven memecoin combining the latest technology such as
web3.0, AR, VR, AI, NFT's and more. <br/>
A brand new cryptocurrency created with the goal to rewards it's holders with crypto passive income
<br/>
The X Doge, also known as $XD Token is the native currency of the ecosystem.<br/> Powered by Ethereum Blockchain.
<br/>
The backbone of the ecosystem features:<br/> 
The $XD Token, The X Bank, Casino Platform, Metaverse P2E Game, Premium 3D NFT Collection.
<br/>
<br/> The X Doge is not just another memecoin on the market, it's a multi-purpose cutting-edge platform, 
<br/> crafted with precision & perfection by an experienced and high-performance team<br/> 
<br/> We intend to keep investors included in the decision-making process
throughout the life of the token and will take further suggestions for future growth,
charity partnerships, brand ambassadorships, and more from our holders.
<br/>
In doing so we aim to reward our investors with crypto passive income through our
redistribution tokenomics, premium NFT collection, Casino & Play-2-Earn Metaverse Game. 

<br/> 

        </Text>
        </Box>
        <Flex display={"flex"} justifyContent={"center"} gap={"20px"} paddingTop={"10px"} paddingBottom={"40px"} flexShrink={"1"}>
            <Link to="#buy"><Button
              display={"flex"}
              bgGradient="linear(to-r, #FEEE00, #F6B700)"
              color="white"
              borderRadius={"25px"}
              w="200px"
              h="50px"
            >
            Buy now
            </Button></Link>
            <Button
              display={"flex"}
              bgGradient="linear(to-r, aqua, blue)"
              color="white"
              borderRadius={"25px"}
              w="300px"
              h="50px"
              flexShrink={"1"}
            >
            Read the whitepaper
            </Button>
            </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Ecosystem;
