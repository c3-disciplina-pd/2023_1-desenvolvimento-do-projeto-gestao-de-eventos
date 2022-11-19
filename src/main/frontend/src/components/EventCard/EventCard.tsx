import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import DefaultImage from "../../assets/images/DefaultImage.jpeg";
import { Event } from "../../configs";

export const EventCard = ({ event }: { event: Event }) => {
  const navigate = useNavigate();

  const eventDate = new Date(event.date ?? "");

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
      onClick={() => navigate(`/detalhe-evento/${event.id}`)}
      cursor="pointer"
      transition="all 0.5s"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image
        src={event.imageUrl ?? DefaultImage}
        w="100%"
        maxH="8.5rem"
        borderRadius="0.5rem"
      />
      <Flex direction="column" p="0.5rem" color="white">
        <Heading fontSize="xl" noOfLines={2}>
          {event.name}
        </Heading>
        <Text>Data: {eventDate.toLocaleDateString("pt-BR")}</Text>
        <Text noOfLines={4}>{event.description ?? "Sem descrição"}</Text>
      </Flex>
    </Flex>
  );
};
