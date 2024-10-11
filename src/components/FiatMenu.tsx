import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Box,
  Text,
  MenuGroup,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import "font-awesome/css/font-awesome.min.css"; // Import FontAwesome CSS

export const languageData = [
  { code: "bg", name: "Bitcoin", flagCode: "BG"},
  { code: "gb", name: "Ethereum", flagCode: "GB" },
  { code: "cn", name: "Doge", flagCode: "TR" },
  // Add more languages with the respective flagCode as needed
];

function FiatMenu() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (language: any) => {
    setSelectedLanguage(language);
    const languageString = JSON.stringify(language);
    localStorage.setItem("lang", languageString);
    i18n.changeLanguage(language.code);
  };

  useEffect(() => {
    try {
      // Retrieve the language object as a string from localStorage
      const langString = localStorage.getItem("lang");

      if (langString) {
        // Parse the language object from the string
        const lang = JSON.parse(langString);
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang.code); // Make sure i18n is properly configured with the language code
      } else {
        setSelectedLanguage(languageData[0]);
      }
    } catch (error) {
      console.error(
        "Error while retrieving or parsing 'lang' from local storage:",
        error
      );
      setSelectedLanguage(languageData[0]); // Handle the error by setting a default language
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Menu>
        <MenuGroup>
        <MenuItem
    as={Button}
  marginTop={"23px"}
  marginLeft={"60px"}
  bg={"transparent"}
  w={"70px"}
  textDecoration={"none"}
  rightIcon={<BsChevronDown />}
  gap={"5px"}
>
{selectedLanguage && (<ReactCountryFlag countryCode={selectedLanguage?.flagCode} svg style={{
    height: "20px",
    width: "20px"
}} />)}{" "} </MenuItem></MenuGroup>
      
      <MenuList borderRadius={"30px"} bg="white" pt={"10px"}>
        <Flex p="8px" gap="50px" wrap="wrap" m={"auto"} >
          <Box>
            <Flex
              direction={"column"}
              h={{ lg: "120px" }}
              wrap={{ lg: "wrap" }}
            >
              {languageData.map((language) => (
                <MenuItem
                  bg="white"
                  key={language.code}
                  onClick={() => handleLanguageChange(language)}
                  color="black"
                  fontSize="16px"
                  display={"flex"}
                  w={"180px"}
                >
                  <ReactCountryFlag countryCode={language.flagCode} svg />{" "}
                  <Text m="auto" ml={"10px"} mb={"2px"}>{language.name}</Text>
                </MenuItem>
              ))}
            </Flex>
          </Box>
        </Flex>
      </MenuList>
    </Menu>
  );
}

export default FiatMenu;
