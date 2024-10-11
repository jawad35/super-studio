import { Box, Container, Flex, Heading, Text, Image, Button, Switch, Stack, Link,  
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList, } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsJustify } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import LeftSide from "./LeftSide";

function Services() {
  const btnClicked = () => {};

  return (
    <Box 
    position="relative" >
  
      <Heading
        fontWeight={"700"}
        textTransform="uppercase"
        fontSize={{ base: "25px", md: "32px" }}
        letterSpacing="4px"
        color="white"
        pb={"10px"}
      >
       Запознайте се с услугите ни.
      </Heading>
      <Text
        fontWeight={"400"}
        textTransform="uppercase"
        fontSize={{ base: "15px", md: "16px" }}
        letterSpacing="4px"
        color="white"
        pb={"10px"}
      >
      Специализирани във всяка една област на дигиталната сфера.
      </Text>
    </Box>
  );
}

export default Services;
