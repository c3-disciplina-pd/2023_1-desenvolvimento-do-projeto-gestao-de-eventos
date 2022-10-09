import { Divider, Flex, Text } from "@chakra-ui/react";

import { InputForm } from "../Input";
import { ButtonForm } from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../assets";
import { useNavigate } from "react-router-dom";

type User = { email: string; password: string };

export const LeftScreenLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({ mode: "onSubmit", resolver: yupResolver(LoginSchema) });
  const navigate = useNavigate();

  const submitLoginForm = (data: User) => {
    console.log(data);
  };

  return (
    <Flex
      w="50%"
      h="100%"
      align="center"
      justify="center"
      p="2rem"
      direction="column"
      as="form"
      onSubmit={handleSubmit(submitLoginForm)}
    >
      <Text
        fontWeight="bold"
        fontStyle="italic"
        color="brand.900"
        fontSize="3xl"
      >
        Events Management
      </Text>
      <Text mt="2rem" fontWeight="bold" color="brand.800" fontSize="2xl">
        Login
      </Text>
      <InputForm
        register={register("email")}
        error={errors.email}
        placeholder="Digite seu e-mail"
      />
      <InputForm
        register={register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
        isPassword
      />
      <ButtonForm
        title="Login"
        type="submit"
        w="50%"
        mt="2rem"
        color="white"
        bg="brand.900"
        h="3.5rem"
        _active={{}}
        _hover={{}}
        _focus={{}}
      />
      <Flex color="brand.600" mt="0.5rem" w="50%" align="left">
        <Text>Esqueceu sua senha?</Text>
        <Text fontWeight="bold" cursor="pointer" ml="0.2rem">
          Clique aqui
        </Text>
      </Flex>
      <Divider w="50%" mt="3rem" borderColor="brand.700" />
      <Text
        color="brand.700"
        position="relative"
        bg="white"
        bottom="0.8rem"
        w="20%"
        textAlign="center"
      >
        Não tem login?
      </Text>
      <ButtonForm
        title="Cadastre-se"
        w="50%"
        mt="3rem"
        color="brand.800"
        bg="white"
        h="3.5rem"
        border="1px solid"
        borderColor="brand.700"
        handleClick={() => navigate("/registro-usuario")}
        _active={{}}
        _hover={{}}
        _focus={{}}
      />
    </Flex>
  );
};
