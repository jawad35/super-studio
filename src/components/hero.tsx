import { Box,
  Flex,
  Heading,
  Image,
  Link,
  Button,
  Text } from "@chakra-ui/react";
import PreSaleWidget from "./preSaleWidget";
import LeftSide from "./LeftSide";
import FancyText from '@carefully-coded/react-text-gradient';
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
 
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setScrollToTop(false);
    }
  }, [scrollToTop]);
  
  const { t } = useTranslation();

  return (
      <Box
      position="relative" 
        bgColor="black"
        color={"white"}
        height={{base: "1400px", md: "1380px", sm: "1280px", lg: "1000px", "xl":"900px"}}
      >
        <Flex
        justify={"center"}
        w="100%"
        maxW="1414px"
        bgColor={"black"}
        m="auto"
        wrap="wrap"
        >
          <Box maxW="600px" m="auto" padding={"10px"}  mt={{ base: "25vh", md: "22vh", lg: "32vh"}}>
          <FancyText
          style={{fontSize: '16px', paddingBottom: "15px"}}
      gradient={{ from: '#FCC400', to: 'white', type: 'linear' }}
      animateTo={{ from: 'white', to: '#fcc400' }}
      animateDuration={2000}
    >
     Най-добрата дигитална агенция в България. 
    </FancyText>
          <Heading
              fontWeight="700"
              letterSpacing={"5px"}
              textTransform="uppercase"
              bgGradient="linear(to-r, white, #A8A9AD)"
              bgClip={"text"}
              fontSize={{ base: "15px", md: "35px" }}
              mb={"30px"}

            >
            РАБОТЕТЕ С НАЙ-ДОБРАТА ДИГИТАЛНА АГЕНЦИЯ В БЪЛГАРИЯ
            </Heading>
            <Heading
             marginTop={"6px"}
              fontWeight="400"
              color={"white"}
              fontSize={{ base: "15px", md: "15px"}}
            >
            Ние ще Ви помогнем с изработка на уеб-сайт, цялостно брандиране и комплексна маркетинг стратегия, която ще изстреля вашият 
            бизнес на следващото ниво.
            </Heading>
            <Flex gap="14px" justifyContent="center" mt={"30px"}>
           <Image src="img/trustpilot-dark.svg" maxW={"100px"} ></Image>
          </Flex>
          <Flex gap="14px" justifyContent="center">
           <Image src="img/stars-4.5.svg" maxW={"120px"} pt={"20px"} ></Image>
          </Flex>
          <Flex id="buy" mt="30px" justify={"center"} wrap={"wrap"} gap="10px">
          <Link href="/Login" style={{textDecoration:'none'}}><Button width={"100%"} bg={"white"} color={"black"}
           borderRadius={"10px"} padding={"23px"} fontWeight={"700"} textTransform={"uppercase"} 
           letterSpacing={"3px"} fontSize={"12px"}
           >Поискай Оферта</Button></Link>
           <Link href="/Login" style={{textDecoration:'none'}}><Button width={"100%"} bg={"black"} color={"white"} borderWidth={"1px"}
           borderRadius={"10px"} padding={"23px"} fontWeight={"700"} textTransform={"uppercase"} 
           letterSpacing={"3px"} fontSize={"12px"} 
           >Научи повече</Button></Link>
           </Flex>
           </Box>

           <Box maxW="700px" m="auto" padding={"10px"}  mt={{ base: "10vh", md: "10vh", lg: "25vh"}}>
          <Image src="img/IphoneMockup.png" w={"70%"} pt={"20px"}></Image>
          </Box>
          </Flex>
          <Flex>
        </Flex>
      </Box>

);
};



export default Hero;
