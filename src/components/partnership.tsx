import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation();

  return (
    <Box mt="50px" color="white">
        <Flex
          gap={["10px", "20px", "20px", "20px", "25px"]}
          h={{base: "250px"}} 
          w="100%"
          display={"inline-block"}
          position="relative"
          justify={"center"}
          overflow={"hidden"}
        >
          <motion.div // Wrap your images with motion.div
            initial={{ translateX: -100}} // Initial position
            animate={{ x: [1000, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px", // Adjust the gap between items
            }}
          >
            <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"420px"}>
        <Text pb="40px" fontSize="12px" maxW={"400px"} maxH={"400px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"420px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"420px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
          </motion.div>
          </Flex>
          <Flex
          gap={["10px", "20px", "20px", "20px", "25px"]}
          h={{base: "300px"}} 
          w="100%"
          display={"inline-block"}
          position="relative"
          justify={"center"}
          overflow={"hidden"}
        >
          <motion.div
            initial={{ translateX: -500 }} // Initial position
            animate={{ x: [1000, -1000] }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "40px", // Adjust the gap between items
            }}
          >
           <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
        <Box backgroundColor={"black"} padding={"25px"} borderRadius={"30px"} maxW={"500px"}>
        <Text pb="40px" fontSize="12px" maxW={"420px"}>
          {
            t(
              "Най-добрата българска платформа за купуване и продаване на биткойн. Всичко стана лесно и бързо чрез банков трансфер!"
            )
          }
        </Text>
        <Text fontSize={"15px"} fontWeight="600">
          {t("Кристиян Иванов")}
        </Text>
        </Box>
          </motion.div>
          </Flex>
    </Box>
  );
};

export default Partnership;
