import { Divider, Flex, Text } from "@chakra-ui/react";

import { InputForm } from "../Input";
import { ButtonForm } from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Masks, RegisterSchema } from "../../assets";
import { useNavigate } from "react-router-dom";

type RegisterUser = {
  name: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
};

export const LeftScreenRegister = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUser>({
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
  });
  const navigate = useNavigate();

  const submitRegisterForm = (data: RegisterUser) => {
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
      onSubmit={handleSubmit(submitRegisterForm)}
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
        Criar conta
      </Text>
      <InputForm
        register={register("name")}
        error={errors.name}
        placeholder="Digite seu nome"
      />
      <InputForm
        register={register("lastName")}
        error={errors.lastName}
        placeholder="Digite sua sobrenome"
      />
      <InputForm
        register={register("cpf")}
        error={errors.cpf}
        placeholder="Digite seu CPF"
        maskFormatFunction={Masks.formatCPF}
      />
      <InputForm
        register={register("email")}
        error={errors.email}
        placeholder="Digite seu email"
      />
      <InputForm
        register={register("password")}
        error={errors.password}
        placeholder="Digite sua senha"
        isPassword
      />
      <ButtonForm
        title="Cadastrar"
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
      <Flex color="brand.600" mt="0.5rem" w="50%" justify="center">
        <Text>Já possui uma conta?</Text>
        <Text
          fontWeight="bold"
          cursor="pointer"
          ml="0.2rem"
          onClick={() => navigate("/")}
        >
          Faça login!
        </Text>
      </Flex>
    </Flex>
  );
};