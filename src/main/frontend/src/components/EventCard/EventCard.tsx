import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import EventMock from "../../assets/images/EventMock.svg";

export const EventCard = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w="20rem"
      minH="20rem"
      h="auto"
      direction="column"
      bg="brand.900"
      borderRadius="1rem"
      m="1rem"
      border="5px solid"
      borderColor="brand.600"
      onClick={() => navigate("/detalhe-evento/1")}
      cursor="pointer"
    >
      <Image src={EventMock} w="100%" borderRadius="0.5rem" />
      <Flex direction="column" p="0.5rem" color="white">
        <Heading fontSize="xl" noOfLines={2}>
          Brazil Promotion 2022
        </Heading>
        <Text>13 a 15 de setembro</Text>
        <Text noOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          tempora dignissimos repellendus, saepe voluptate eius dolorum. Nostrum
          repellendus deleniti eligendi quisquam voluptates obcaecati corrupti,
          eos officia, tenetur cupiditate sint quod!
        </Text>
      </Flex>
    </Flex>
  );
};
