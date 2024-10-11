import {
  Box,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Box
      textAlign="left"
      w="100%"
      color={"black"}
      px={{ base: "20px", sm: "20px", md: "50px", lg: "50px", xl: "250px"}}
      minH={"1000px"}
      h={{ 
        base: "1650px", 
        sm: "1850px", 
        md: "1800px",
        lg: "1650px",
         }}
      pt={{
        base: "35%",
        sm: "25%",
        md: "18%",
        lg: "15%",
        xl: "13%",
        "2xl": "180px",
      }}
    >
      <Flex direction={"column"} justify={"cetner"} mx="auto" maxW="1468px">
        <Heading
          fontSize={{ base: "35", sm: "45px", md: "55px" }}
          fontFamily={"Syne"}
          lineHeight={"50px"}
        >
       Privacy Policy and Cookie Policy
        </Heading>
        <Text
          maxW="1000px"
          mt={{ base: "10px", sm: "30px" }}
          mb={{ base: "20px", sm: "50px" }}
          fontSize={{ base: "14px", sm: "17px", md: "20px" }}
          fontWeight={"thin"}
        >
          We at The X Doge, are committed to protecting any data that we collect concerning you. By using our services, you agree to the use of the data that we collect in accordance with this Privacy Policy.
We are committed to protecting your privacy.
We collect the minimum amount of information about you that is commensurate with providing you with a satisfactory service. This Policy indicates the type of processes that may result in data being collected about you. The purpose of this Privacy Policy to enable you to understand which personal identifying information ("PII", "Personal Identifiable Information") of yours is collected, how and when we might use your information, who has access to this information, and how you can correct any inaccuracies in the information. To better protect your privacy, we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our website.
        </Text>
      </Flex>
      <Flex direction={"column"} justify={"cetner"} mx="auto" maxW="1468px">
        <Heading
          fontSize={{ base: "25px", sm: "35px", md: "45px" }}
          fontFamily={"Syne"}
          lineHeight={"50px"}
        >
       Information Collected
        </Heading>
        <Text
          maxW="1000px"
          mt={{ base: "10px", sm: "30px" }}
          mb={{ base: "20px", sm: "50px" }}
          fontSize={{ base: "14px", sm: "17px", md: "20px" }}
          fontWeight={"thin"}
        >
          We may collect any or all of the information that via both automated means such as communications profiles and cookies. The Personal Identifiable Information (PII) you give us depends on the type of service, support, or sale inquiry, and may include your name, address, telephone number, fax number and email address, dates of service provided, types of service provided, payment history, manner of payment, number and/or value of payments, date of payments, domain name or other payment information. All sensitive information is collected on a secure server and data is transferred.
          When transferring personal information, a security icon will appear in your browser.
        </Text>
      </Flex>
      <Flex direction={"column"} justify={"cetner"} mx="auto" maxW="1468px">
        <Heading
          fontSize={{ base: "25px", sm: "35px", md: "45px" }}
          fontFamily={"Syne"}
          lineHeight={"50px"}
        >
       Information Used
        </Heading>
        <Text
          maxW="1000px"
          mt={{ base: "10px", sm: "30px" }}
          mb={{ base: "20px", sm: "50px" }}
          fontSize={{ base: "14px", sm: "17px", md: "20px" }}
          fontWeight={"thin"}
        >
          This information is used for billing and to provide service and support to our customers. We may also study this information to determine our customers’ needs and provide support for our customers. All reasonable precautions are taken to prevent unauthorised access to this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information about your account details. The X Doge may email its monthly newsletter to the primary contact e-mail on file, but customers are able to opt out of this newsletter at any time.
We use IP addresses to analyse trends, administer our site and servers, track access, and gather broad demographic information for aggregate use. IP addresses are not linked to personally identifiable information. It is possible that personal information about a customer may be included in the log files due to the normal functions of IP addresses and SaaS applications.
        </Text>
      </Flex>
      <Flex direction={"column"} justify={"cetner"} mx="auto" maxW="1468px">
        <Heading
          fontSize={{ base: "25px", sm: "35px", md: "45px" }}
          fontFamily={"Syne"}
          lineHeight={"50px"}
        >
       Cookies
        </Heading>
        <Text
          maxW="1000px"
          mt={{ base: "10px", sm: "30px" }}
          mb={{ base: "20px", sm: "50px" }}
          fontSize={{ base: "14px", sm: "17px", md: "20px" }}
          fontWeight={"thin"}
        >
          Your Internet browser has the in-built facility for storing small text files - "cookies" - that hold information which allows a website to recognize your account. We use cookies to save your preferences and login information, and providing personalized functionality. You can reject cookies by changing your browser settings, but be aware that this will disable some of the functionality on The X Doge website. More information about cookies can be found at:https://en.wikipedia.org/wiki/HTTP_cookie.
        </Text>
      </Flex>
    </Box>
  );
};

export default PrivacyPolicy;
