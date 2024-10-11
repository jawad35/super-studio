import {
    Box,
    Button,
    Divider,
    Flex,
    Text,
    Heading,
    Step,
    Progress,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
  } from "@chakra-ui/react";
import { StepperStylesProvider } from "@chakra-ui/stepper/dist/step-context";
  import React from "react"
  import "react-icons/ai";
  
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]
  
  function Step1() {
    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    const activeStepText = steps[activeStep].description
  
    const max = steps.length - 1
    const progressPercent = (activeStep / max) * 100
    return (
        <Box
        w="100%"
        color={"white"}
        marginLeft={"-30px"}
        px={{ base: "20px", sm: "20px", md: "50px", lg: "50px", xl: "170px"}}
        pt={{
            base: "20%",
            sm: "20%",
            md: "10%",
            lg: "5%",
            xl: "5%",
            "2xl": "150px",
        }}
      >
        <Flex direction={"column"} justify={"center"} mx="auto" maxW="1468px" bg={"black"} borderRadius={"30px"} padding={"40px"}>
        <Stepper size='sm' index={activeStep} gap='0' colorScheme='yellow'>
        {steps.map((step, index) => (
          <Step key={index} style={{ gap: "0px"}} >
            <StepIndicator bg='white'>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator style={{ }}/>
          </Step>
        ))}
      </Stepper>
      <Progress
        value={progressPercent}
        position='absolute'
        height='3px'
        width='full'
        top='10px'
        zIndex={-1}
      />
    </Flex></Box>
    );
  };
  
  export default Step1 ;
  