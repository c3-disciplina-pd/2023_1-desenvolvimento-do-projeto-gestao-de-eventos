import { useToast } from "@chakra-ui/react";
import { useMutation, UseMutateAsyncFunction } from "react-query";
import { CreateUser } from "../requests";
import { RegisterUser } from "../types";

type UseCreateUserProps = {
  createUserMutation: UseMutateAsyncFunction<
    void,
    unknown,
    RegisterUser,
    unknown
  >;
  createUserLoading: boolean;
};

export const useCreateUser = (): UseCreateUserProps => {
  const toast = useToast();
  const { mutateAsync: createUserMutation, isLoading: createUserLoading } =
    useMutation({
      mutationFn: CreateUser,
      onError: () => {
        toast({
          title: "Houve um erro ao cadastrar o usuário.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
      },
      onSuccess: () => {
        toast({
          title: "Usuário criado com sucesso!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
      },
    });

  return { createUserMutation, createUserLoading };
};
