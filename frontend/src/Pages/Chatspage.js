import React from "react";
import RecentChats from "../components/Chats/RecentChats";
import MainChats from "../components/Chats/MainChats";
import { Container, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Chatspage = () => {
  return (
    <>
      <Container
        display="block"
        maxW={{ base: "100%", md: "90%", xl: "80%" }}
        // bg="blue.600"
        // color="white"
        centerContent
        boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.3),0 10px 10px -5px rgba(0, 0, 0, 0.1);"
      >
        <Navbar />
        <Flex flexDirection={{ base: "column", sm: "row" }}>
          <RecentChats />
          {/* <MainChats /> */}
        </Flex>
      </Container>
    </>
  );
};

export default Chatspage;
