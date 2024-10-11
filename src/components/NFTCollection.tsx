import { Box, Heading, Image, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

const NFTCollection = () => {
  const { t } = useTranslation();
  return (
    <>
     <Box
      color={"white"}
      textAlign={"center"}
      pt={["60px"]}
      mt={["50px"]}
      position="relative"   
      bgColor={"black"}
      bgImage="url('/img/Layer1.png')"
      bgPosition={"right"}
      bgSize={"600px"}
      id="NFT"
    >
        <Heading
          textTransform="uppercase"
          fontFamily="Syne"
          fontSize={{ base: "30px", md: "40px" }}
          letterSpacing="5px"
          color="white"
          textAlign={"center"}
          mt={["10px"]}
        >
         {t("Premium NFT Collection")}
        </Heading>
        <Text
              fontWeight="600"
              textTransform="uppercase"
              letterSpacing="2px"
              color={"gold"}
              fontSize="10px"
            >
            Premium NFT Collection
            </Text>
            <Text
          textAlign={"center"}
          pt="20px"
          pb="30px"
          fontSize="16px"
          color="#FFF"
        >
        Welcome to The X Doge NFT Collection. <br/>
      A total of 5,000 exclusively NFT's designed
      with perfection and stored on the Ethereum Blockchain. <br/>
      The NFTs will be distributed free-of-charge to early investors.<br/>
      Divided into 4 rarities, each with it's own unique investment tier,
      utility & multiplyer. <br/>
      The multiplayer is a revolutionary feature that allows NFT Holders 
      to earn crypto passive income. <br/>
      USDT rewards go straight into holders wallet from the trading volume of the $XD token. 

        </Text>
        <Flex display={"flex"} justifyContent={"center"} gap={"20px"} paddingTop={"10px"} paddingBottom={"20px"}>
            <Button
              display={"flex"}
              bgGradient="linear(to-r, #FEEE00, #F6B700)"
              color="white"
              borderRadius={"25px"}
              w="200px"
              h="50px"
              flexShrink={"0px"}
            >
            Buy now
            </Button>
            <Button
              display={"flex"}
              bgGradient="linear(to-r, aqua, blue)"
              color="white"
              borderRadius={"25px"}
              w="200px"
              h="50px"
              flexShrink={"0px"}
            >
            Learn More
            </Button>
            </Flex>
            <Box display={"flex"} flexDir={"row"}>
        <Image src="img/SO.png" alt="nft" width={"20%"} ></Image>
        <Image src="img/NFT1.PNG" alt="nft" width={"20%"}></Image>
        <Image src="img/NFT1.PNG" alt="nft" width={"20%"}></Image>
        <Image src="img/NFT1.PNG" alt="nft" width={"20%"}></Image>
        <Image src="img/SO.png" alt="nft" width={"20%"}></Image>
        
        
        </Box>
    </Box>
    </>
  );
};

export default NFTCollection;
