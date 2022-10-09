import { Flex } from "@chakra-ui/react";

import { RightPartScreen } from "../RightPartScreen";
import { LeftScreenRegister } from "./LeftScreenRegister";

export const RegisterComponent = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="98vw" h="95vh">
        <LeftScreenRegister />
        <RightPartScreen />
      </Flex>
    </Flex>
  );
};
