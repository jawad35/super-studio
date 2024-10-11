import { Box, Flex, Container, Heading, Text, Image, Button, Link} from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";

function BlogView() {
    const { t } = useTranslation();

  return (
    <Box mt="100px">
          <Flex gap="14px" justifyContent="center">
          <Link href="/Login" style={{textDecoration:'none'}}><Button width={"100%"} bg={"black"} borderWidth={"2px"} borderColor={"#fcc400"} color={"#fcc400"}
           borderRadius={"10px"} padding={"23px"} fontWeight={"700"} textTransform={"uppercase"} 
           letterSpacing={"3px"} fontSize={"12px"}
           >Към блога</Button></Link>
          </Flex>
     
      
    </Box>
  );
}

export default BlogView;
