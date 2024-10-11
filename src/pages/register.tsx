import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import RegisterHero from "../components/RegisterHero";
import Animated from "../pages/animations";

const register = () => {
  return (
    <Box bgGradient="linear(to-r, white, white, #D3B97A)">
      <Animated/>
      <Box>
        <Navbar />
        <RegisterHero />
        <Footer />
      </Box>
    </Box>
  );
};

export default register;
