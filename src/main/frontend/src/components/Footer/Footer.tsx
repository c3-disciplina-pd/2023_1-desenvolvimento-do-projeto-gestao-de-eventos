import { Flex, Heading, Icon, Text } from "@chakra-ui/react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <Flex
      w="100%"
      h="auto"
      bg="brand.900"
      justify="center"
      align="center"
      textAlign="center"
    >
      <Flex direction="column" m="1rem" color="white">
        <Heading fontSize="xl">Events Management</Heading>
        <Text>Todos os direitos reservados &copy;</Text>
        <Flex
          justify="space-between"
          fontSize="2xl"
          color="brand.600"
          mt="0.5rem"
        >
          <Icon as={AiFillInstagram} />
          <Icon as={AiFillLinkedin} />
          <Icon as={AiFillFacebook} />
          <Icon as={AiOutlineWhatsApp} />
        </Flex>
      </Flex>
    </Flex>
  );
};
