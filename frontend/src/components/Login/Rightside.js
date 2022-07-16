import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Rightside = () => {
  const [login, setLogin] = useState(true);

  return (
    <>
      <Box
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "50%", md: "0px" }}
        left={{ base: "50%", md: "0px" }}
        transform={{ base: "translate(-50%, -60%)", md: "translate(0, 0)" }}
        display={login ? "block" : "none"}
        mt="20px"
        height="auto"
        width={{ base: "90%", sm: "350px" }}
        borderRadius="10px"
      >
        <Stack mt="50px" spacing={4}>
          <Input
            borderRadius="20px"
            type="email"
            isRequired
            focusBorderColor="none"
            placeholder="Email..."
          />
          <Input
            borderRadius="20px"
            isRequired
            type="password"
            focusBorderColor="none"
            placeholder="Password..."
          />
          <Button borderRadius="20px">Login</Button>
          <Text
            fontSize="xs"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            Forgot Password?
          </Text>
          <Text display="flex" justifyContent="center" alignItems="center">
            Didn't have an account?{" "}
            <Button onClick={() => setLogin(false)} variant="text" size="sm">
              Signup
            </Button>
          </Text>
        </Stack>
      </Box>

      {/* Signup */}
      <Box
        position={{ base: "absolute", md: "relative" }}
        top={{ base: "50%", md: "0px" }}
        left={{ base: "50%", md: "0px" }}
        transform={{ base: "translate(-50%, -60%)", md: "translate(0, 0)" }}
        display={login ? "none" : "block"}
        mt="20px"
        height="auto"
        width={{ base: "90%", sm: "350px" }}
        borderRadius="10px"
      >
        <Stack mt="50px" spacing={4}>
          <Flex gap={2}>
            <Input
              borderRadius="20px"
              isRequired
              focusBorderColor="none"
              placeholder="Fist Name"
            />
            <Input
              borderRadius="20px"
              focusBorderColor="none"
              placeholder="Last Name"
            />
          </Flex>
          <Input
            borderRadius="20px"
            isRequired
            type="email"
            focusBorderColor="none"
            placeholder="Email..."
          />
          <Input
            borderRadius="20px"
            isRequired
            type="password"
            focusBorderColor="none"
            placeholder="Password..."
          />
          <Input
            borderRadius="20px"
            isRequired
            type="password"
            focusBorderColor="none"
            placeholder="Confirm Password..."
          />

          <Button borderRadius="20px">Signup</Button>
          <Text display="flex" justifyContent="center" alignItems="center">
            Already have an account?{" "}
            <Button onClick={() => setLogin(true)} variant="text" size="sm">
              Login
            </Button>
          </Text>
        </Stack>
      </Box>
    </>
  );
};

export default Rightside;
