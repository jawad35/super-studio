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
  
  const OrderWidget = () => {
    const { t } = useTranslation();
    
    return (
      <Box
        textAlign={"center"}
        bg={"#f1f2f4"}
         borderTopRadius={"20px"}
        padding={"20px"}
        width={"610px"}
        height={"640px"}
        borderRadius={"40px"}
        fontSize={"18px"}
      >
          <CountdownCard/>
            <Box color={"black"} p="10px">
            <Box textAlign={"left"} w={["100%", "100%"]} padding={"13px"} backgroundColor={"white"} borderRadius={"35px"} borderColor={"#AD9057"} borderWidth={"2px"}>
                    <Flex justify={"space-between"}>
                      <Text fontSize={"14px"} marginBottom={"1px"} marginLeft={"15px"} >
                       <strong>Купуваш:</strong>
                      </Text>
                    </Flex>
                    <InputGroup>
                    <InputLeftElement>
                      <FiatMenu />
                      </InputLeftElement>
                      <Input
                         borderColor="transparent"
                         type="number"
                         h={"51px"}
                         backgroundColor={"white"}
                         fontFamily={"FatFrank"}
                         borderRadius={"30px"}
                         padding={"30px"}
                         paddingLeft={"90px"}
                         fontSize={"25px"}
                         fontWeight={"bold"}
                         value={"3000"}
                      />
                    </InputGroup>
                  </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                marginBottom={"10px"}
                justifyContent={"center"}
                gap={"25px"}
                width={"100%"}
                mt={"20px"}
              >
                <Box width={"20%"}>
                  <Divider borderColor={"#AD9057"} />
                </Box>
                <Button borderColor={"#AD9057"} borderWidth={"2px"} bg={"black"} color={"white"}><MdSwapVert size={"25px"}/></Button>
                <Box width={"20%"}>
                  <Divider borderColor={"#AD9057"} />
                </Box>
              </Box>
              <Box textAlign={"left"} w={["100%", "100%"]} padding={"13px"} backgroundColor={"white"} borderRadius={"35px"} borderColor={"#AD9057"} borderWidth={"2px"}>
                    <Flex justify={"space-between"}>
                      <Text fontSize={"14px"} marginBottom={"1px"} marginLeft={"15px"}>
                       <strong>Получаваш:</strong>
                      </Text>
                    </Flex>
                    <InputGroup>
                    <InputLeftElement>
                      <CryptoMenu />
                      </InputLeftElement>
                      <Input
                         borderColor="transparent"
                         type="number"
                         h={"51px"}
                         fontFamily={"FatFrank"}
                         backgroundColor={"white"}
                         borderRadius={"30px"}
                         padding={"30px"}
                         paddingLeft={"90px"}
                         fontSize={"25px"}
                         fontWeight={"bold"}
                      />
                    </InputGroup>
                  </Box>
              <Divider borderColor={"#AD9057"} />
              <Text mb="0px" fontSize="12px" mt={"18px"} color={"black"}>
            {
              t(
                "* Курсовете се променят постоянно. Таксите за крипто транзакциите са вкл."
              )
            }
          </Text>
  
              <Flex id="buy" mt="18px" justify={"center"} wrap={"wrap"} gap="5px">
              <Link href="/Order" style={{textDecoration:'none'}}><Button width={"100%"} textColor="white" bgGradient="linear(to-r, #353935, black, #353935, black, #353935)" borderRadius={"20px"} padding={"25px"} fontWeight={"bold"}
                  
                >Купи сега</Button></Link>
              </Flex>
              <Text mb="0px" fontSize="12px" mt={"15px"} color={"black"}>
            {
              t(
                "Поддържани платежни методи"
              )
            }
          </Text>
          <Flex gap="14px" justifyContent="center" mt={"15px"}>
             <Image src="img/02_visa.svg" maxW={"120px"} ></Image>
             <Image src="img/01_mastercard.svg" maxW={"120px"} ></Image>
             <Text m={"auto"} ml={"2px"} mr={"5px"} color={"black"} fontSize="12px" fontWeight={"bold"}>
            {
              t(
                "Банков път"
              )
            }
          </Text>
             <Image src="img/easypay.svg" maxW={"120px"} ></Image>
             <Text m={"auto"} ml={"2px"} mr={"5px"} color={"black"} fontSize="12px" fontWeight={"bold"}>
            {
              t(
                "EasyPay"
              )
            }
          </Text>
             <Image src="img/cashterminal.svg" maxW={"120px"} ></Image>
             <Image src="img/revolut.svg" maxW={"70px"} ></Image>
            </Flex>
               
            </Box>
      </Box>
    );
  };
  
  export default OrderWidget;
  