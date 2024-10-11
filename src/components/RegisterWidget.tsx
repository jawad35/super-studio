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
  Checkbox
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "react-icons/ai";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { FaEye, FaTelegram } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  exptyingError,
  getAllUser,
  userLogin
} from "../stores/user/userActions";
import { any } from "prop-types";
import { ClassNames } from "@emotion/react";
import { error } from "console";

const RegisterWidget: React.FC = () => {
  const [email, setEmail] = useState();
  const [emerror, setEmError] = useState(false);
  const [passerror, setPassError] = useState(false);
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

   // const state = useSelector((state)=> state);
   const user = { email, password, username };

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordRegex =
     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
 
     const handleChange = (val)=>{
      if(val.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        setEmError(false)
      }else{
        setEmError(true)
      }
     }

     const handlePassword = (val)=>{
      if(val.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)){
        setPassError(false)
      }else{
        setPassError(true)
      }
     }
 
   const togglePasswordVisibility = () => {
     setPasswordVisible(!isPasswordVisible);
   };
  
   // Validation error messages
  

  return (
    <Box
      textAlign={"center"}
      bgColor={"black"}
      color={"white"}
      padding={"15px"}
      width={"680px"}
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
  cursor={"pointer"}>Регистрация</Text></Box>
  
          <Box color={"white"} p="10px" w={"100%"}>
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
            <Box
              display={"flex"}
              alignItems={"center"}
              marginTop={"25px"}
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
              gap={"5px"}
              width={"100%"}
            >
            <Box textAlign={"left"} w={["100%", "60%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Име*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                className="fa-regular fa-user"
                style={{ fontSize: "21px", cursor: "pointer",  margin: "auto", marginTop: "16px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Име"
                    type="email"
                    h={"51px"}
                  />
                </InputGroup>
              </Box>
              <Box textAlign={"left"} w={["100%", "60%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Презиме*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                className="fa-regular fa-user"
                style={{ fontSize: "21px", cursor: "pointer",  margin: "auto", marginTop: "16px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Презиме"
                    type="email"
                    h={"51px"}
                  />
                </InputGroup>
              </Box>
              <Box textAlign={"left"} w={["100%", "60%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Фамилия*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                className="fa-regular fa-user"
                style={{ fontSize: "21px", cursor: "pointer",  margin: "auto", marginTop: "16px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Фамилия"
                    type="email"
                    h={"51px"}
                  />
                </InputGroup>
              </Box>
            </Box>
        <Box textAlign={"left"} w={["100%", "100%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Вашата електронна поща*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                className="fa-regular fa-envelope"
                style={{ fontSize: "21px", cursor: "pointer",  margin: "auto", marginTop: "16px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  </InputGroup>
                  <Input
                    pl={"38px"}
                    borderColor="#AD9057"
                    placeholder="Eлектронна поща"
                    type="email"
                    h={"51px"}
                    onChange={(e) => handleChange(e.target.value)} /> {emerror?<p style={{color: '#ff4f4f', fontSize: "14px"}}>Невалиден E-mail адрес</p>:''}
                
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
                className="fa-solid fa-lock"
                style={{ fontSize: "21px", cursor: "pointer", margin: "auto", marginTop: "15px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  </InputGroup>
                  <Input
                  pl={"38px"}
                    borderColor="#AD9057"
                    placeholder="Парола"
                    type="password"
                    h={"51px"}
                    onChange={(e) => handlePassword(e.target.value)} /> {passerror?<p style={{color: '#ff4f4f', fontSize: "14px"}}>Паролата трябва да съдържа поне 8 цифри, една голяма буква, една малка буква, едно число и един специален символ </p>:''}
                </Box>
                <Box textAlign={"left"} w={["100%", "100%"]} padding={"15px"}>
                <Flex justify={"space-between"}>
                  <Text fontSize={"14px"} marginBottom={"5px"} marginLeft={"2px"}>
                   <strong>Потвърди паролата*</strong>
                  </Text>
                </Flex>
                <InputGroup>
                <InputLeftElement>
                <i
                className="fa-solid fa-lock"
                style={{ fontSize: "21px", cursor: "pointer", margin: "auto", marginTop: "15px", marginRight: "8px" }}
              ></i>
                  </InputLeftElement>
                  <Input
                    borderColor="#AD9057"
                    placeholder="Парола"
                    type="password"
                    h={"51px"}
                    ></Input>
                  <InputRightElement>
                  <i
                onClick={togglePasswordVisibility}
                className={isPasswordVisible ? "fa-regular fa-eye" : "fa fa-eye-slash"}
                style={{ fontSize: "20px", cursor: "pointer", margin: "auto", marginTop: "16px", marginRight: "20px"  }}
              >
              </i>
                  </InputRightElement>
                </InputGroup>
                </Box>
            <Divider borderColor={"#AD9057"} />

            <Flex
            style={{
              flexDirection: "column",
              margin: "auto",
            }}
          >
             <Checkbox size={"sm"} colorScheme='yellow' style={{ marginLeft: 5, marginTop: 4}}>
             Съгласен съм с <strong>Общите условия</strong>, <strong>Политиката за поверителност</strong> и <strong>AML политиката</strong>
             </Checkbox>
          </Flex>

            <Flex id="buy" mt="20px" justify={"center"} wrap={"wrap"} gap="5px">
            <Button width={"100%"} textColor="black" bg={"white"} borderRadius={"5px"} padding={"25px"} fontWeight={"bold"} borderColor="#AD9057" borderWidth={"2px"}
                
                >Създай профил</Button>
              <Text mb="0px" fontSize="15px" marginTop={"10px"}>
        {
          t(
            "Вече имате регистрация? Вход"
          )
        }
      </Text>
      
                </Flex>
          </Box>
    </Box>
  );
}

export default RegisterWidget;