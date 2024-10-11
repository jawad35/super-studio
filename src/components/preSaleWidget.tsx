import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Link
} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import CountdownCard from "./countdownCard";
import "react-icons/ai";
import { MdSwapVert } from "react-icons/md";
import CryptoMenu from "./CryptoMenu";
import FiatMenu from "./FiatMenu";

const PreSaleWidget = () => {
  const { t } = useTranslation();

 

  return (
    <Box
      textAlign={"center"}
      bg={"transparent"}
      padding={"20px"}
      justifyContent={"center"}
      width={"500px"}
    >
          <Box color={"red"} p="25px" justifyContent={"center"}>
          <Image src="img/IphoneMockup.png" w={"60%"} pt={"20px"} ></Image>
          
             
          </Box>
    </Box>
  );
};

export default PreSaleWidget;
