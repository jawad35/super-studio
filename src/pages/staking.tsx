import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Animated from "../pages/animations";

const Staking = () => {
  return (
    <Box bgGradient="linear(to-r, white, white, #D3B97A)">
      <Animated/>
      <Box>
        <Navbar />
        <Footer />
      </Box>
    </Box>
  );
};

export default Staking;
