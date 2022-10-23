import { Flex, Text } from "@chakra-ui/react";
import { CarouselMainPage } from "../Carousel";
import { Navbar } from "../Navbar";

export const HomeComponent = () => {
  return (
    <Flex w="100vw" minH="100vh" h="auto" direction="column">
      <Navbar />
      <Flex justify="center" direction="column" align="center">
        <Text fontSize="4xl" m="1rem 0" color="brand.900" fontWeight="bold">
          Destaques
        </Text>
        <CarouselMainPage />
      </Flex>
    </Flex>
  );
};
