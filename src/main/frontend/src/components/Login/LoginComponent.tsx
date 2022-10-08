import { Flex } from "@chakra-ui/react";
import { LeftScreen, RightScreen } from "./components";

export const LoginComponent = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="98vw" h="95vh">
        <LeftScreen />
        <RightScreen />
      </Flex>
    </Flex>
  );
};
