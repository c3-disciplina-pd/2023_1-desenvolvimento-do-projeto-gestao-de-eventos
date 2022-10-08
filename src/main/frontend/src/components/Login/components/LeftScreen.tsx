import { Flex, Text } from "@chakra-ui/react";

export const LeftScreen = () => {
  return (
    <Flex
      w="50%"
      h="100%"
      align="center"
      justify="center"
      p="2rem"
      direction="column"
    >
      <Text
        fontWeight="bold"
        fontStyle="italic"
        color="brand.900"
        fontSize="3xl"
      >
        Events Management
      </Text>
      <Text mt="2rem" fontWeight="bold" color="brand.800" fontSize="2xl">
        Login
      </Text>
    </Flex>
  );
};
