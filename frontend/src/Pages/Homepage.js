import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login/Login";

const Homepage = () => {
  return (
    <Box height="100%">
      <Navbar />
      <Flex align="center" justify="center">
        <Login />
        {/* <Signup /> */}
      </Flex>
    </Box>
  );
};

export default Homepage;
