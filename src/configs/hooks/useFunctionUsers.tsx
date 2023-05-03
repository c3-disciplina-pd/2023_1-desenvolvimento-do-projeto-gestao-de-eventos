import { useToast } from "@chakra-ui/react";
import {
  useMutation,
  UseMutateAsyncFunction,
  UseQueryOptions,
  useQuery,
} from "react-query";
import { CreateUser, GetUser, UpdateUser } from "../requests";
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

type UseUpdateUserProps = {
  updateUserMutation: UseMutateAsyncFunction<
    void,
    unknown,
    RegisterUser,
    unknown
  >;
  updateUserLoading: boolean;
};

type UseGetOrderDetailsProps = {
  config?: UseQueryOptions<void, unknown, RegisterUser, ["user-infos", string]>;
  cpf: string;
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
        alert("Houve um erro ao cadastrar o usuário.");
      },
      onSuccess: () => {
        toast({
          title: "Usuário criado com sucesso!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
        alert("Usuário criado com sucesso!");
      },
    });

  return { createUserMutation, createUserLoading };
};

export const useUpdateUser = (): UseUpdateUserProps => {
  const toast = useToast();
  const { mutateAsync: updateUserMutation, isLoading: updateUserLoading } =
    useMutation({
      mutationFn: UpdateUser,
      onError: () => {
        toast({
          title: "Houve um erro ao atualizar as informações do usuário.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
        alert("Houve um erro ao atualizar as informações do usuário.");
      },
      onSuccess: () => {
        toast({
          title: "Informações do usuário atualizadas com sucesso!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
        alert("Informações do usuário atualizadas com sucesso!");
      },
    });

  return { updateUserMutation, updateUserLoading };
};

export const useGetUser = ({ config, cpf }: UseGetOrderDetailsProps) => {
  return useQuery(["user-infos", cpf], () => GetUser({ cpf }), config);
};
