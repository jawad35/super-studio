import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-icons/ai";
import { formatUnits, parseUnits } from "viem";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";

const LoginWidget = () => {
  
  return (
    <Box
      textAlign={"center"}
      bgColor={"black"}
      color={"white"}
      padding={"20px"}
      width={"630px"}
      height={"650px"}
      borderRadius={"30px"}
      fontSize={"18px"}
    >
      <Box
    w="100%"
    overflow="hidden"
    color="transparent"
    letterSpacing={"2px"}
    fontSize={"34px"}
  ><Heading
  fontWeight="700"
  fontFamily={"syne"}
  textTransform="uppercase"
  letterSpacing="5px"
  color={"white"}
  fontSize={{ base: "30px", md: "40px" }}
  pt={"30px"}
  userSelect={'none'}
  cursor={"pointer"}
>
 {("Cryptonyx")}
</Heading>
<Text
  fontWeight="700"
  textTransform="uppercase"
  letterSpacing="5px"
  color={"white"}
  fontSize={{ base: "10px", md: "15px" }}
  userSelect={'none'}
  cursor={"pointer"}>Добре дошли</Text></Box>
  
          <Box color={"white"} p="10px" w={"100%"}>
          <Flex gap="10px" justify="center" wrap="wrap">
        </Flex> 
        <Box textAlign={"left"} w={["100%", "100%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Вашата електронна поща*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                onClick={() =>
                  window?.open("https://www.instagram.com/TheXDoge/", "_blank")
                }
                className="fa-regular fa-envelope"
                style={{ fontSize: "21px", cursor: "pointer",  margin: "auto", marginTop: "16px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Eлектронна поща"
                    type="email"
                    h={"51px"}
                  />
                </InputGroup>
              </Box>
              <Box textAlign={"left"} w={["100%", "100%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Парола*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                onClick={() =>
                  window?.open("https://www.instagram.com/TheXDoge/", "_blank")
                }
                className="fa-solid fa-lock"
                style={{ fontSize: "21px", cursor: "pointer", margin: "auto", marginTop: "15px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Парола"
                    type="password"
                    h={"51px"}
                  />
                  <InputRightElement>
                <i
                onClick={() =>
                  window?.open("https://www.instagram.com/TheXDoge/", "_blank")
                }
                className="fa-regular fa-eye"
                style={{ fontSize: "20px", cursor: "pointer", margin: "auto", marginTop: "16px", marginRight: "20px"  }}
              ></i>
                  </InputRightElement>
                </InputGroup>
                </Box>
                <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={["column", "row"]}
            marginLeft={"20px"}
            marginRight={"15px"}
          >
            <Box textAlign={"left"} w={["100%", "100%"]}>
              <Flex justify={"space-between"}>
                <Text fontSize={"12px"}>
                  Запомни парола
                </Text>
                <Text
                  fontSize={"12px"}
                  fontWeight={"bold"}
                  mr="5px"
                  cursor={"pointer"}
                >
                  Забравена парола?
                </Text>
              </Flex></Box></Box>
            <Divider borderColor={"#AD9057"} />

            <Flex id="buy" mt="20px" justify={"center"} wrap={"wrap"} gap="5px">
            <Button width={"100%"} textColor="black" bg={"white"} borderRadius={"5px"} padding={"25px"} fontWeight={"bold"} borderColor="#AD9057" borderWidth={"2px"}
                
                 >Вход</Button>
                 <Box
              display={"flex"}
              alignItems={"center"}
              marginTop={"10px"}
              justifyContent={"center"}
              gap={"25px"}
              width={"100%"}
            >
              <Box width={"20%"}>
                <Divider borderColor={"#AD9057"} />
              </Box>
              <Text>или</Text>
              <Box width={"20%"}>
                <Divider borderColor={"#AD9057"} />
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              marginTop={"10px"}
              justifyContent={"center"}
              gap={"25px"}
              width={"100%"}
            >
              <Button width={"100%"} textColor="white" bg={"black"} borderRadius={"5px"} padding={"25px"} fontWeight={"bold"} borderColor="#AD9057" borderWidth={"2px"}
                
                 ><FcGoogle size={"20px"}/></Button>
                <Button width={"100%"} textColor="white" bg={"black"} borderRadius={"5px"} padding={"25px"} fontWeight={"bold"} borderColor="#AD9057" borderWidth={"2px"}
                
                ><GrApple size={"20px"}/></Button>
                <Button width={"100%"} textColor="white" bg={"white"} borderRadius={"5px"} padding={"25px"} fontWeight={"bold"} borderColor="#AD9057" borderWidth={"2px"}
                
                ><FaTelegram size={"20px"} color="#0088cc"/></Button>
            </Box>
      
                </Flex>
          </Box>
    </Box>
  );
};

export default LoginWidget;