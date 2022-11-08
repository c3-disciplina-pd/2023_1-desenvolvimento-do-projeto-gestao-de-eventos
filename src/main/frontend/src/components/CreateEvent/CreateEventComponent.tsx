import { Flex, Input, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Masks, RegisterSchema } from "../../assets";
import { RegisterUser, useCreateUser } from "../../configs";
import { ButtonForm } from "../Button";
import { Footer } from "../Footer";
import { InputForm } from "../Input";
import { Navbar } from "../Navbar";

export const CreateEventComponent = () => {
  const navigate = useNavigate();

  return (
    <Flex
      maxW="100%"
      minH="100vh"
      h="auto"
      direction="column"
      overflowX="hidden"
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
          Brazil Promotion 2022
        </Text>

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
                <Text ml="0.2rem">13 a 15 de Setembro de 2022</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Horário:</Text>
                <Text ml="0.2rem">13h às 20h</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Local:</Text>
                <Text ml="0.2rem">Pro Magno Centro de Eventos</Text>
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
                <Text color="brand.900">Ponto de referência:</Text>
                <Text ml="0.2rem">Perto da padaria</Text>
              </Flex>
              <Flex>
                <Text color="brand.900">Nº:</Text>
                <Text ml="0.2rem">13</Text>
              </Flex>
              <Flex direction="column">
                <Text color="brand.900"> Informações adicionais:</Text>
                <Text noOfLines={3}>
                  Informações adicionais: Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Quia voluptatum iste,
                  distinctio atque et architecto est! Quos, quidem excepturi.
                  Delectus, molestias repellat ipsam minima aut corporis atque
                  error sunt officiis.
                </Text>
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
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            asperiores fugiat quia ipsa omnis in temporibus molestias facere
            error, officiis accusantium maiores iusto ab nam, soluta quisquam
            fuga voluptatum doloremque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Commodi exercitationem sit ducimus deserunt dicta,
            id fugiat. Amet excepturi quis, doloremque officiis saepe sapiente
            delectus architecto fuga esse, debitis ab labore? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Sit iusto eius debitis
            aliquid fugit? Eius soluta voluptatem natus quae, cumque ad vitae
            magni ullam maxime, repudiandae possimus nesciunt sit eveniet. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
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
