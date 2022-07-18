import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Leftside = () => {
  return (
    <Box
      display={{ base: "none", md: "block" }}
      height={{ base: "none", md: "480px", lg: "500px" }}
    >
      <Image
        height={{ base: "none", md: "480px", lg: "500px" }}
        objectFit="cover"
        src={require("../../images/bg3.png")}
        alt="At work illustration"
      />
    </Box>
  );
};

export default Leftside;
