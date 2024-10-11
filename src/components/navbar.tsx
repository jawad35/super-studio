import {
  Button,
  Checkbox,
  Flex,
  Input,
  ModalCloseButton,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import {
  Box,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "react-icons/ai";
import { motion } from "framer-motion";
import LanguageMenu from "./languageMenu";
import { useTranslation } from "react-i18next";
import CustomButton from "./custombutton";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const { t } = useTranslation();


  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSupportModal = () => {
    setIsSupportModalOpen(!isSupportModalOpen);
  };

  return (
    <Box
      position={"absolute"}
      width={"100%"}
      zIndex={"5"}
      bg={"black"}
    >
      <Box
      px={"10px"}
      py={"10px"}
        display={"flex"}
        maxWidth={"1212px"}
        justifyContent={"space-between"}
        margin={"auto"}
        alignItems={"center"}
      >
        <Box
          w={{ base: "120px" }}
          textAlign={"left"}
          onClick={toggleModal}
          cursor={"pointer"}
          display={{ xl: "block", md: "block", base: "none" }}
        >
          <motion.div
            initial={{ rotate: -5, scaleY: 1 }} // Initial values for rotation and scaleY
            animate={{
              rotate: isModalOpen ? 45 : 0,
              translateY: isModalOpen ? "70px" : "0px",
              translateX: isModalOpen ? "-30px" : "0px",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Box
              onClick={toggleModal}
              cursor={"pointer"}
              w="40px"
              h="3px"
              bg="white"
              style={{marginLeft: "5px"}}
            ></Box>
          </motion.div>
          <Box
            onClick={toggleModal}
            cursor={"pointer"}
            w="40px"
            h="3px"
            bg="white"
            my="5px"
            style={{marginLeft: "5px"}}
          ></Box>
          <motion.div
            initial={{ rotate: -5, scaleY: 1 }} // Initial values for rotation and scaleY
            animate={{
              rotate: isModalOpen ? -45 : 0,
              translateY: isModalOpen ? "-70px" : "0px",
              translateX: isModalOpen ? "-30px" : "0px",
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Box
              onClick={toggleModal}
              cursor={"pointer"}
              w="40px"
              h="3px"
              bg="white"
              style={{marginLeft: "5px"}}
            ></Box>
          </motion.div>
        </Box>
        <Box>
        <Image src="img/SuperiorStudio.JPG" width={"210px"} margin={"auto"}/>
        </Box>
        <Flex gap={"2px"}>
      <CustomButton title="ПОИСКАЙ ОФЕРТА" />
       <LanguageMenu />
         
        </Flex>
      </Box>

      {/* Create a modal component */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} size="full">
        <ModalContent
          height="100vh"
          width="100vw"
          backgroundColor="rgb(13, 13, 13, 0.96)"
          color={"white"}
          zIndex={"5"}
          style={{
            zIndex: "5 !important",
          }}
        >
          <style>
            {`
        .css-1u2cvaz {
          z-index: 5
        }
        `}
          </style>
          <ModalHeader p="0">
            <Box
              padding={"10px 10px"}
              display={"flex"}
              maxWidth={"1212px"}
              justifyContent={"space-between"}
              margin={"auto"}
              alignItems={"center"}
            >
              <Box
                w={{ base: "207px" }}
                textAlign={"left"}
                onClick={toggleModal}
                cursor={"pointer"}
              >
                <motion.div
                  initial={{ rotate: -5, scaleY: 1 }} // Initial values for rotation and scaleY
                  animate={{
                    rotate: isModalOpen ? 45 : 0,
                    translateY: isModalOpen ? "63px" : "0px",
                    translateX: isModalOpen ? "-30px" : "0px",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Box
                    onClick={toggleModal}
                    cursor={"pointer"}
                    w="40px"
                    h="3px"
                    bg="white"
                  ></Box>
                </motion.div>

                <motion.div
                  initial={{ rotate: -5, scaleY: 1 }} // Initial values for rotation and scaleY
                  animate={{
                    rotate: isModalOpen ? -45 : 0,
                    translateY: isModalOpen ? "-63px" : "0px",
                    translateX: isModalOpen ? "-30px" : "0px",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <Box
                    onClick={toggleModal}
                    cursor={"pointer"}
                    w="40px"
                    h="3px"
                    bg="white"
                    my="5px"
                  ></Box>
                </motion.div>
              </Box>

              <Link href="" onClick={toggleModal} ml={{ base: "-130px" }}>
              <Image src="img/logo.png" width={"68px"} margin={"auto"} userSelect={"none"} textDecoration={"none"}/>
              </Link>
              <Box w="80px" h="40px"></Box>
            </Box>
          </ModalHeader>
          <ModalBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
            fontSize={"20px"}
            gap={"20px"}
            color={"#B7B7B7"}
            padding={{ base: "10px" }}
          >
            <Link href="#ecosystem" onClick={toggleModal} style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("Вход")}</Link>
            <Link href="https://the-x-doge-tm-whitepaper.gitbook.io/the-x-doge-tm-whitepaper-and-documents/the-x-doge-tm-project-overview/the-x-doge-tm-overview" style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("Регистрация")}</Link>
            <Link onClick={toggleModal} style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("Първи стъпки")}</Link>
            <Link href="#roadmap" onClick={toggleModal} style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("OTC Търговия")}</Link>
            <Link href="/privacypolicy" style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("Криптовалути")}</Link>
            <Link href="/termsconditions" style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>{t("Новини")}</Link>

          </ModalBody>
        </ModalContent>
      </Modal>
      <Box
      display={{ xl: "block", base: "none" }}
        w={"100%"}
        backgroundColor={"black"}
        color={"white"}
        ml={"-50px"}
      >
  
      <Box
        padding={"15px 35px"}
      display={"flex"}
      maxWidth={"1000px"}
      m={"auto"}
      justifyContent={"space-evenly"}
      alignItems={"center"}>
          <Box>
            <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("НАЧАЛО")}
            </Heading>
          </Box>
          <Box>
            <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("УСЛУГИ")}
            </Heading>
            
          </Box>
          <Box>
            <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("ОФЕРТИ")}
            </Heading>
          </Box>
          <Box>
            <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("БЛОГ")}
            </Heading>
          </Box>
          <Box>
            <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("ЗА НАС")}
            </Heading>
          </Box>
          <Box>
          <Link href="/AML" style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>
          <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("КЛИЕНТИ")}
            </Heading></Link>
          </Box>
          <Box>
          <Link href="/AML" style={{textDecoration:'none', userSelect: 'none', fontFamily: "sans-serif"}}>
          <Heading
              fontSize={["14px", "14px", "14px", "16px", "16px"]}
              textTransform="uppercase"
              fontWeight="500"
              userSelect="none" 
              cursor={"pointer"}
              _hover={{
                color: "#fcc400",
                transition: "0.7s"
              }}
            >
              {t("КОНТАКТИ")}
            </Heading></Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
