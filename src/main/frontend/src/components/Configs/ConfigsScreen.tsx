import { Avatar, Flex, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { RegisterSchema } from "../../assets";
import Background from "../../assets/images/Background.svg";
import { RegisterUser, useGetUser, useUpdateUser } from "../../configs";
import { ButtonForm } from "../Button";
import { Footer } from "../Footer";
import { InputForm } from "../Input";
import { Navbar } from "../Navbar";

export const ConfigsScreen = () => {
  
  const authUser = Cookies.get("userCPF");
  const { data: user } = useGetUser({ cpf: authUser ?? "" });

  const navigate = useNavigate();

  const initialValues = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    cpf: user?.cpf,
    email: user?.email,
    password: user?.password,
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUser>({
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
    defaultValues: initialValues,
  });

  const { updateUserMutation, updateUserLoading } = useUpdateUser();

  const submitUpdateUser = async (data: RegisterUser) => {
    await updateUserMutation({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
    navigate("/");
  };

  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      as="form"
      onSubmit={handleSubmit(submitUpdateUser)}
      bgImage={Background}
    >
      <Navbar />
      <Flex w="60%" justify="center" align="center" m="3rem">
        <Avatar
          name={`${user?.firstName} ${user?.lastName}`}
          size="xl"
          width="8rem"
          height="8rem"
        />
        <Flex direction="column">
          <Text
            ml="1rem"
            fontSize="xl"
            color="black"
            fontWeight="600"
            maxW="20rem"
          >
            {user?.firstName} {user?.lastName}
          </Text>
          <Text
            ml="1rem"
            color="black"
            fontSize="xl"
            fontWeight="600"
            maxW="20rem"
          >
            {user?.email}
          </Text>
        </Flex>
      </Flex>
      <Text m="2rem" fontWeight="bold" color="brand.900" fontSize="2xl">
        Editar informações do perfil
      </Text>
      <InputForm
        register={register("firstName")}
        error={errors.firstName}
        placeholder="|"
      />
      <InputForm register={register("lastName")} error={errors.lastName} />
      <InputForm
        register={register("cpf")}
        error={errors.cpf}
        placeholder="|"
        isReadOnly
      />
      <InputForm
        register={register("email")}
        error={errors.email}
        placeholder="|"
      />
      <InputForm
        register={register("password")}
        error={errors.password}
        placeholder="|"
        isPassword
      />
      <ButtonForm
        title="Confirmar edição"
        isLoading={updateUserLoading}
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
