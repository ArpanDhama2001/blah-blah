import React from "react";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex px="7%" height="60px" alignItems="center">
      <Heading as="h2" size="lg">
        Blah-Blah
      </Heading>
      <Spacer />
      <Box display="flex" flex="1" gap="2" justifyContent="end">
        <IconButton
          background="transparent"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Box>
    </Flex>
  );
};

export default Navbar;
