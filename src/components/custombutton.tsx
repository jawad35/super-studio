import { Button } from "@chakra-ui/react";
import React from "react";

function CustomButton(props: any) {
  return (
    <Button
      onClick={() => props.onClick()}
      textTransform={"uppercase"} 
      bg={"black"} color={"white"} borderRadius={"10px"} borderWidth={"3px"} padding={"20px"} fontWeight={"bold"} 
      w={props.w}
      fontSize="13px"
      _hover={{
        bgGradient: "linear(to-b, #171717, black)"
      }}
    >
      {props.title}
    </Button>
  );
}

export default CustomButton;
