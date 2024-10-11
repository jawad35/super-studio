import React from "react";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import BlogView from "../components/BlogView";
import PricingCards from "../components/PricingCards";
import Services from "../components/Services";
import AboutUs from "../components/AbousUs";
import Animated from "../pages/animations";


const Home = () => {
  return (
    <Box bg={"black"}>
      <Animated/>
      <Box>
      <Navbar />
        <Hero/>
        <PricingCards/>
        <BlogView/>
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
