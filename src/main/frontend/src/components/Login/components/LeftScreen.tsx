import { Flex, Text } from "@chakra-ui/react";

import { InputForm } from "../../Input";
import { ButtonForm } from "../../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginSchema } from "../../../assets";

type User = { email: string; password: string };

export const LeftScreen = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({ mode: "onSubmit", resolver: yupResolver(LoginSchema) });

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
      <ButtonForm title="Login" type="submit" />
    </Flex>
  );
};
