import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

const RoadmapCard = ({ phase, items }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".fadeInOnScroll");
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`fadeInOnScroll ${isVisible ? "visible" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5 }}
    >
      <Box
        w={"fit-content"}
        maxW="400px"
        minW={{ lg: "400px" }}
        minH={"250px"}
        boxShadow="inset 2px 0px 0px #FFFD01, inset -2px 0px 0px #FFFD01"
        _hover={{
          boxShadow:
            "inset 2px 2px 0px #FFFD01, inset -2px -2px 0px #FFFD01, 0 0 40px #FFFD01",
          transition: "box-shadow 0.1s ease-in-out",
        }}
        borderRadius={"20px"}
        textAlign={"left"}
        padding={"20px 15px"}
        bg="black"
      >
        <Heading>{phase}</Heading>
        <UnorderedList ml="50px" fontSize={"14px"} mt="20px">
          {items.map((item: string, index: number) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>
      </Box>
    </motion.div>
  );
};

export default RoadmapCard;
