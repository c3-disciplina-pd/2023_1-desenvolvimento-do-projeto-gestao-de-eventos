import { Flex, Text } from "@chakra-ui/react";

import Background from "../../assets/images/Background.svg";

import { CarouselMainPage } from "../Carousel";
import { EventCard } from "../EventCard";
import { Filter } from "../Filter";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const HomeComponent = () => {
  return (
    <Flex
      maxW="100%"
      minH="100vh"
      h="auto"
      direction="column"
      overflowX="hidden"
      bgImage={Background}
    >
      <Navbar />
      <Flex justify="center" direction="column" align="center">
        <Text fontSize="4xl" m="1rem 0" color="brand.900" fontWeight="bold">
          Destaques
        </Text>
        <CarouselMainPage />
        <Filter />
      </Flex>
      <Flex maxW="100%" flexWrap="wrap" justify="center" align="center">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </Flex>
      <Footer />
    </Flex>
  );
};
