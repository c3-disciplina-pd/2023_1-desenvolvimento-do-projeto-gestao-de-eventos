import { Flex } from "@chakra-ui/react";
import { Navbar } from "../Navbar";

export const HomeComponent = () => {
  return (
    <Flex w="100vw" minH="100vh" h="auto" direction="column">
      <Navbar />
    </Flex>
  );
};
