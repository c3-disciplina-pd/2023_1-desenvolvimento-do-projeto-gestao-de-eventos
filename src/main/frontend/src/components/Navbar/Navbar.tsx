import { Center, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../Button";
import { Profile } from "./Profile";
import { LinkPages } from "./utils";

export const Navbar = () => {
  const authUser = true;
  const navigate = useNavigate();

  return (
    <Flex
      bg="brand.900"
      w="100%"
      minH="4rem"
      align="center"
      justify="space-between"
    >
      <Flex>
        <Text
          fontSize="2xl"
          fontWeight="600"
          fontStyle="italic"
          color="white"
          ml="2rem"
        >
          Events Management
        </Text>
      </Flex>
      <Flex align="center">
        {LinkPages.map(({ name, path }, index) => (
          <Link color="white" href={path} key={index} m="0 2rem">
            {name}
          </Link>
        ))}
        <Center height="3rem">
          <Divider orientation="vertical" />
          {authUser ? (
            <Profile />
          ) : (
            <ButtonForm
              title="Login"
              color="white"
              bg="brand.600"
              m="0 2rem"
              handleClick={() => navigate("/")}
              _active={{}}
              _hover={{}}
              _focus={{}}
            />
          )}
        </Center>
      </Flex>
    </Flex>
  );
};
