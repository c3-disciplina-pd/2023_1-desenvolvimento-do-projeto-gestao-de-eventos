import { Flex, Link, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { EventSchema, Masks } from "../../assets";
import { Event, useCreateEvent } from "../../configs";
import { ButtonForm } from "../Button";
import { Footer } from "../Footer";
import { InputForm } from "../Input";
import { Navbar } from "../Navbar";

export const CreateEventComponent = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Event>({
    mode: "onSubmit",
    resolver: yupResolver(EventSchema),
  });

  const navigate = useNavigate();
  const { createEventMutation, createEventLoading } = useCreateEvent();

  const submitRegisterForm = async (data: Event) => {
    console.log(data);
    await createEventMutation({
      name: data.name,
      description: data.description,
      date: data.date,
      creator: data.creator,
      imageUrl: data.imageUrl,
      location: data.location,
      price: data.price,
      vacancies: data.vacancies,
    });
    // navigate("/");
  };

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      as="form"
      onSubmit={handleSubmit(submitRegisterForm)}
    >
      <Navbar />
      <Text mt="2rem" fontWeight="bold" color="brand.900" fontSize="2xl">
        Cadastro de Evento
      </Text>
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Link do Banner
      </Text>
      <InputForm
        register={register("imageUrl")}
        error={errors.imageUrl}
        placeholder="|"
        hasTooltip
      >
        <Text>
          Acesse o site{" "}
          <Link href="https://imgbb.com/" color="brand.900" target="_blank">
            https://imgbb.com/
          </Link>{" "}
          e faça o upload da imagem do seu evento. Após isso, selecione a opção
          HTML FULL LINKED e copie o contéudo de src=""
        </Text>
      </InputForm>
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Nome do evento
      </Text>
      <InputForm
        register={register("name")}
        error={errors.name}
        placeholder="|"
      />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Promotor do evento
      </Text>
      <InputForm
        register={register("creator")}
        error={errors.creator}
        placeholder="|"
      />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Valor
      </Text>
      <InputForm
        register={register("price")}
        error={errors.price}
        placeholder="|"
      />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Total de vagas
      </Text>
      <InputForm
        register={register("vacancies")}
        error={errors.vacancies}
        placeholder="|"
        maskFormatFunction={Masks.parseNumbers}
      />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Data do evento
      </Text>
      <InputForm register={register("date")} error={errors.date} type="date" />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Localização
      </Text>
      <InputForm
        register={register("location")}
        error={errors.location}
        placeholder="|"
      />
      <Text
        mt="1rem"
        fontWeight="400"
        color="brand.900"
        fontSize="lg"
        textAlign="left"
        w="50%"
      >
        Descrição do Evento
      </Text>
      <InputForm
        register={register("description")}
        error={errors.description}
        placeholder="|"
      />
      <ButtonForm
        title="Cadastrar"
        // isLoading={createUserLoading}
        type="submit"
        w="50%"
        m="2rem 0"
        color="white"
        bg="brand.600"
        h="3.5rem"
        _active={{}}
        _hover={{}}
        _focus={{}}
      />
      <Footer />
    </Flex>
  );
};
