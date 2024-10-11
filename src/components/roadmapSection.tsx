import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import RoadmapCard from "./roadmapCard";
import { useTranslation } from "react-i18next";

const RoadMap = () => {
  const { t } = useTranslation();
 
  return (
    <Box
      bgColor={"black "}
      color={"white"}
      textAlign={"center"}
      height={"500px"}
      pt={["50px"]}
      pb={{ base: "50px", lg: "150px" }}
      position="relative"
      mt={"50px"}
      id="roadmap"
      bgImage="url('/img/Layer1.png')"
      bgPosition={"right"}
      bgSize={"600px"}
    >

      <Flex
        alignItems={"center"}
        justify="center"
        flexDirection={"row"}
        gap="20px"
        position={{ lg: "absolute" }}
        width={{ lg: "100%" }}
        overflow="hidden"
      >
        <Box>
          <RoadmapCard
            phase={t("PHASE I")}
            items={[
                t("Conceptualization of The X Doge"),
                t("Smart Contracts Development"),
                t("Whitepaper Release"), 
                t("Fully Operational Website"),  
                t("Metaverse & Casino Development"),
                t("Creating Social Media Channels"),
                t("Launch of the Presale"), 
                t("Massive PR Marketing Campaign"),
                t("Massive Social Media Marketing"),
                t("Launch of The X Bank™ - Staking"),

            ]}
          />
        </Box>
        <Box>
          <RoadmapCard
            phase={t("PHASE II")}
            items={[
              t("Casino License Obtained"),
              t("20% Presale Filled"),
              t("XD.Casino Website Launch"),
              t("Telegram XD.Casino Bot Launch"),
              t("Massive PR Marketing Campaign"),
              t("Onboard Tier 1 Crypto Influencers"),
              t("Community Supercar Giveaway "),
              t("Community Competitions"),
              t("$20M Total Wagering Target"),
              t("Partnerships"),
            ]}
          />
        </Box>
        <Box>
          <RoadmapCard
            phase={t("PHASE III")}
            items={[
              t("Massive PR Marketing Campaign"),
              t("Tier 1 Crypto Influencers"),
              t("Listing on Decentralized Exchange"),
              t("Creating $XDOGE/ETH Trading Pair"),
              t("Claiming available"),
              t("NFT Airdrop to Presale Investors"),
              t("Listing on CoinMarketCap & CoinGecko"),
              t("Agressive Marketing Push"),
              t("Celebrity Marketing Campaign"),
              t("Listing on Centralized Exchanges"),
              t("$40M Total Wagering Target"),
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RoadMap;
