import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import Conditions from "../components/AMLPolicy";
import Animated from "../pages/animations";

const AML = () => {
  return (
    <Box bgGradient="linear(to-r, white, white, #D3B97A)">
      <Animated/>
      <Box>
        <Navbar />
        <Conditions />
        <Footer />
      </Box>
    </Box>
  );
};

export default AML;
