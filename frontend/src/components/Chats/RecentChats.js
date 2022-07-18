import { Avatar, Badge, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { chats } from "../../DummyData";

const RecentChats = () => {
  const recentChat = {
    bg: useColorModeValue("red.50", "gray.700"),
  };
  const newMsg = {
    count: 15,
    msg: "This is new msg, and this msg is very long",
    color: useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
    badgeBg: useColorModeValue("green", "blue"),
  };
  return (
    <Flex
      padding={2}
      flexDirection="column"
      gap={4}
      width={{ base: "100%", sm: "350px" }}
      height="100vh"
      overflow="auto"
      _hover={{
        cursor: "pointer",
      }}
    >
      {chats.map((chat) => {
        return (
          <Flex
            p="2rem .5rem"
            align="center"
            gap={2}
            transition="all 0.2s"
            height={14}
            borderRadius={8}
            _hover={{
              bg: recentChat.bg,
            }}
          >
            <Avatar name={chat.chatName} src={chat.chatImage} mr={4} />
            <Flex
              direction="column"
              align="start"
              justify="center"
              flexGrow="1"
            >
              <Text>{chat.chatName}</Text>
              <Text fontSize="sm" color={newMsg.color}>
                {newMsg.msg.length < 30
                  ? newMsg.msg
                  : newMsg.msg.slice(0, 30) + "..."}
              </Text>
            </Flex>
            <Badge borderRadius={8} colorScheme={newMsg.badgeBg}>
              {newMsg.count}
            </Badge>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default RecentChats;
