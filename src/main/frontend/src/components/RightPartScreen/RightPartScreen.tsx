import { Flex, Image } from "@chakra-ui/react";

import Circles from "../../assets/images/Circles.svg";
import Events from "../../assets/images/Events.svg";

export const RightPartScreen = () => {
  return (
    <Flex
      bg="brand.900"
      w="50%"
      h="100%"
      borderRadius="1.5rem"
      bgImage={Circles}
      bgSize="65%"
      bgRepeat="no-repeat"
      bgPos="bottom 0 left 0"
      justify="center"
      align="center"
    >
      <Flex
        bg="rgba(183, 233, 246, 0.2)"
        justify="center"
        align="center"
        w="85%"
        h="80%"
        borderRadius="1.5rem"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
        style={{
          backdropFilter: "blur(4.5px)",
        }}
        border="0.1rem solid"
        borderColor="white"
      >
        <Image src={Events} w="80%" h="90%" />
      </Flex>
    </Flex>
  );
};
