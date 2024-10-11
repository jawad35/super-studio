import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Footer from "../components/footer";
import LoginHero from "../components/LoginHero";
import Animated from "../pages/animations";


const Login = () => {
  return (
    <Box bgGradient="linear(to-r, white, white, #D3B97A)">
      <Animated/>
      <Box>
        <Navbar />
        <LoginHero />
        <Footer />
      </Box>
    </Box>
  );
};

export default Login;
