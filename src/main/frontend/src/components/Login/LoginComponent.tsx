import { Flex } from "@chakra-ui/react";
import Circles from "../../assets/images/Circles.svg";

export const LoginComponent = () => {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex w="98vw" h="95vh">
        <Flex bg="white" w="50%" h="100%"></Flex>
        <Flex
          bg="brand.900"
          w="50%"
          h="100%"
          borderRadius="1.5rem"
          bgImage={Circles}
          bgSize="65%"
          bgRepeat="no-repeat"
          bgPos="bottom 0 left 0"
        ></Flex>
      </Flex>
    </Flex>
  );
};
