import { useToast } from "@chakra-ui/react";
import { useMutation, UseMutateAsyncFunction } from "react-query";
import { LoginUser } from "../requests";
import { User } from "../types";

type UseLoginProps = {
  loginMutation: UseMutateAsyncFunction<void, unknown, User, unknown>;
  loginLoading: boolean;
};

export const useLogin = (): UseLoginProps => {
  const toast = useToast();
  const { mutateAsync: loginMutation, isLoading: loginLoading } = useMutation({
    mutationFn: LoginUser,
    onError: () => {
      toast({
        title: "Usuário ou senha incorretos!",
        duration: 3000,
        isClosable: true,
        status: "error",
      });
      alert("Usuário ou senha incorretos!");
    },
    onSuccess: () => {
      toast({
        title: "Login bem sucedido!",
        duration: 3000,
        isClosable: true,
        status: "success",
      });
      alert("Login bem sucedido!");
    },
  });

  return { loginMutation, loginLoading };
};
