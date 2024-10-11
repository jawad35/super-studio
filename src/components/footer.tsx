import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  Text
} from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "react-icons/ai";
import { FaEnvelope, FaPhoneVolume } from "react-icons/fa";
import FancyText from '@carefully-coded/react-text-gradient';

const Footer = () => {
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

  const handleClick = () => {
    setScrollToTop(true);
    // Additional logic related to the "Ecosystem" link can be added here
    console.log("Ecosystem link clicked!");
  };
  const { t } = useTranslation();
  return (
    <Box
      pt="60px"
      pb="20px"
      color={"white"}
      fontSize={"14px"}
    >
      <Image src="img/divider.svg" alt="divider" pb={"30px"}/>
      <Flex
      justify={"center"}
        gap={"40px"}
        w="100%"
        maxW="1250px"
        m="auto"
        wrap="wrap"
      >
        
        <Box>
        <Image src="img/SuperiorStudio.JPG" w="270px" cursor="pointer" m="auto" />
        <FancyText
          style={{fontSize: '16px', paddingBottom: "15px"}}
      gradient={{ from: '#FCC400', to: 'white', type: 'linear' }}
      animateTo={{ from: 'white', to: '#fcc400' }}
      animateDuration={2000}
    >
     Най-добрата дигитална агенция в българия. 
    </FancyText>
          <Text fontSize={"16px"} cursor="pointer">www.superiorstudio.bg</Text>
          <Flex gap="10px" justifyContent="center">
          <i
            onClick={() =>
              window?.open("https://twitter.com/TheXDoge", "_blank")
            }
            className="fa-brands fa-x-twitter" 
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "15px" }}
          ></i>
            <i
            onClick={() =>
              window?.open("https://t.me/thexdogeofficial", "_blank")
            }
            className="fa-brands fa-telegram"
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "15px" }}
          ></i>
          <i
            onClick={() =>
              window?.open("https://discord.gg/sfXnPJA7Rh", "_blank")
            }
            className="fa-brands fa-discord"
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "15px" }}
          ></i>
          <i
            onClick={() =>
              window?.open("https://www.instagram.com/TheXDoge/", "_blank")
            }
            className="fa-brands fa-instagram"
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "15px" }}
          ></i>
          <i
            onClick={() =>
              window?.open("https://www.reddit.com/r/TheXDoge/", "_blank")
            }
            className="fa-brands fa-reddit-alien"
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "15px" }}
          ></i>
          <i
            onClick={() =>
              window?.open(
                "https://www.youtube.com/channel/UCyek3Hp15QqTLzO5SRJwf_w",
                "_blank"
              )
            }
            className="fa-brands fa-youtube"
            style={{ fontSize: "21px", cursor: "pointer", paddingBottom: "10px" }}
          ></i>
          </Flex>
        </Box>
        <Flex justify={"center"} gap={"80px"} pb={"25px"} pt={"20px"} m="auto" wrap="wrap">
          <Box>
            <Heading
             mb="30px"
             fontSize={["14px", "14px", "14px", "16px", "16px"]}
             textTransform="uppercase"
             fontWeight="600"
             userSelect="none" 
             cursor={"pointer"}
            >
              {t("УСЛУГИ")}
            </Heading>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Изработка на Wordpress сайт")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Изработка на сайт")}</Text>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Изработка на онлайн магазин")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Изработка на мобилно приложение")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("SEO Оптимизация")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Дигитален Маркетинг")}</Text>
          </Box>
          <Box>
            <Heading
               mb="30px"
               fontSize={["14px", "14px", "14px", "16px", "16px"]}
               textTransform="uppercase"
               fontWeight="600"
               userSelect="none" 
               cursor={"pointer"}
            >
              {t("Информация")}
            </Heading>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Оферти")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Проекти")}</Text>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("За нас")}</Text>
           <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Блог")}</Text>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Условия за ползване")}</Text>
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
        transition: "0.5s"
      }}>{t("Политика за поверителност")}</Text>
          </Box>
          <Box>
            <Heading
               mb="30px"
               fontSize={["14px", "14px", "14px", "16px", "16px"]}
               textTransform="uppercase"
               fontWeight="600"
               userSelect="none" 
               cursor={"pointer"}
            >
              {t("Контакти")}
            </Heading>
            <Flex gap={"9px"}>
            <FaEnvelope />
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
         color: "#fcc400",
          transition: "0.5s"
      }}>{t("office@superiorstudio.bg")}</Text>
            </Flex>
            <Flex gap={"9px"}>
            <FaPhoneVolume />
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
         transition: "0.5s"
      }}>{t("+359 877 739 569")}</Text></Flex>
      <Flex gap={"9px"}>
            <FaPhoneVolume />
            <Text color={"#898989"} fontWeight={"300"} fontSize={"14px"} cursor="pointer" userSelect="none" _hover={{
        color: "#fcc400",
         transition: "0.5s"
      }}>{t(" ул. „Александър Малинов“ №51, 1000 София")}</Text></Flex>
          </Box>
        </Flex>
      </Flex>
      <Image src="img/divider.svg" alt="divider" />
      <Box m="auto" maxW="1200px" w="100%" fontSize={"10px"} mt="30px">
        <Text fontSize={"15px"} fontWeight="300" color={"#898989"}>
          {t("Авторско право © Дигитална агенция Superior Studio 2024. Всички права запазени.")}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
