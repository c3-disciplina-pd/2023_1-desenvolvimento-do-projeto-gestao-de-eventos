import UnicapLogo from "../../assets/images/UnicapLogo.png";

import { Divider, Flex, Text } from "@chakra-ui/react";

import { InputForm } from "../Input";
import { ButtonForm } from "../Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { LoginSchema, Masks } from "../../assets";
import { useLogin, User } from "../../configs";
import { useEffect } from "react";

export const LeftScreenLogin = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({ mode: "onSubmit", resolver: yupResolver(LoginSchema) });

  const navigate = useNavigate();
  const { loginMutation, loginLoading } = useLogin();

  const isAuth = () => {
    if (localStorage.getItem("accessToken") !== null) {
      navigate("/pagina-inicial");
    }else{
      navigate("/");
    }
  };

  const submitLoginForm = ({ cpf, password }: User) => {
    loginMutation({ cpf, password });
    setTimeout(() => isAuth(), 1000);
  };

  useEffect(() => isAuth(), []);

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
      <Flex
        bgColor="brand.700"
        borderRadius="1rem"
        w="15rem"
        h="10rem"
        bgImage={UnicapLogo}
        bgRepeat="no-repeat"
        bgSize="100%"
        bgPos="center"
      />
      <Text mt="2rem" fontWeight="bold" color="brand.900" fontSize="2xl">
        Login
      </Text>
      <InputForm
        register={register("cpf")}
        error={errors.cpf}
        placeholder="Digite seu CPF"
        maskFormatFunction={Masks.formatCPF}
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
        isLoading={loginLoading}
        w="50%"
        mt="2rem"
        color="white"
        bg="brand.600"
        h="3.5rem"
        _active={{}}
        _hover={{}}
        _focus={{}}
      />
      <Flex color="brand.900" mt="0.5rem" w="50%" align="left">
        <Text>Esqueceu sua senha?</Text>
        <Text fontWeight="bold" cursor="pointer" ml="0.2rem">
          Clique aqui
        </Text>
      </Flex>
      <Divider w="50%" mt="2.5rem" borderColor="brand.700" />
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
        mt="2.5rem"
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