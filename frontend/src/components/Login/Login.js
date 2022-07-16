import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Login = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      width={{ base: "90%", lg: "80%" }}
      maxWidth="900px"
      alignItems="center"
      justifyContent="space-between"
    >
      <Leftside />
      <Divider orientation="vertical" />
      <Rightside />
    </Flex>
  );
};

export default Login;
