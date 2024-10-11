import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import RoadMap from "../components/roadmapSection";
import CryptoOrder from "../components/CryptoOrder";
import Step1 from "../components/step1";
import Animated from "../pages/animations";

const Order = () => {
  return (
    <Box bgGradient="linear(to-r, white, white, #D3B97A)">
      <Animated/>
      <Box>
        <Navbar />
        <Step1/>
        <CryptoOrder />
        <Footer />
      </Box>
    </Box>
  );
};

export default Order;
