import { Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import Background from "../../assets/images/Background.svg";
import DefaultImage from "../../assets/images/DefaultImage.jpeg";
import { useGetEvent } from "../../configs";

import { ButtonForm } from "../Button";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const EventDetailsComponent = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: event } = useGetEvent({ id: Number(id) });

  const eventDate = new Date(event?.date ?? "");

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
      <Flex
        w="100%"
        h="100%"
        justify="center"
        align="center"
        p="3rem"
        direction="column"
      >
        <Text
          fontSize="4xl"
          m="1rem 0"
          color="brand.900"
          fontWeight="bold"
          mt="2rem"
        >
          {event?.name}
        </Text>
        <Image
          src={event?.imageUrl ?? DefaultImage}
          maxW="40vw"
          borderRadius="1rem"
        />
        <Text
          fontSize="4xl"
          m="1rem 0"
          color="brand.900"
          fontWeight="bold"
          mt="2rem"
        >
          Detalhes do evento
        </Text>
        <Flex justify="space-between" w="50%">
          <Flex
            bg="brand.600"
            w="45%"
            minH="10rem"
            borderRadius="1rem"
            justify="center"
            align="center"
            direction="column"
            color="white"
            fontWeight="bold"
          >
            <Flex direction="column" textAlign="left" p="1rem">
              <Flex>
                <Text color="brand.900">Data:</Text>
                <Text ml="0.2rem">{eventDate.toLocaleDateString("pt-BR")}</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Promovido por:</Text>
                <Text ml="0.2rem">{event?.creator}</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Local:</Text>
                <Text ml="0.2rem">{event?.location}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            bg="brand.600"
            w="45%"
            minH="10rem"
            borderRadius="1rem"
            justify="center"
            align="center"
            direction="column"
            color="white"
            fontWeight="bold"
          >
            <Flex direction="column" textAlign="left" p="1rem">
              <Flex>
                <Text color="brand.900"> Nome do evento:</Text>
                <Text ml="0.2rem">{event?.name}</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Total de vagas:</Text>
                <Text ml="0.2rem">{event?.vacancies}</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Valor:</Text>
                <Text ml="0.2rem">{event?.price === 0 ? "Gratuito" : `R$ ${event?.price}`}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text
          fontSize="4xl"
          m="1rem 0"
          color="brand.900"
          fontWeight="bold"
          mt="2rem"
        >
          Descrição
        </Text>
        <Flex
          bg="brand.600"
          w="70%"
          minH="10rem"
          borderRadius="1rem"
          justify="center"
          align="center"
          direction="column"
          color="white"
          fontWeight="bold"
          p="3rem"
        >
          <Text>{event?.description}</Text>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" m="2rem">
        <ButtonForm
          title="Inscreva-se"
          color="white"
          bg="brand.900"
          w="30%"
          position="relative"
          bottom="3rem"
          handleClick={() => navigate("/")}
          _active={{}}
          _hover={{}}
          _focus={{}}
        />
      </Flex>
      <Footer />
    </Flex>
  );
};
