import { useToast } from "@chakra-ui/react";
import { UseMutateAsyncFunction, useMutation } from "react-query";

import { CreateEvent } from "../requests";
import { Event } from "../types";

type UseCreateUserProps = {
  createEventMutation: UseMutateAsyncFunction<void, unknown, Event, unknown>;
  createEventLoading: boolean;
};

export const useCreateEvent = (): UseCreateUserProps => {
  const toast = useToast();
  const { mutateAsync: createEventMutation, isLoading: createEventLoading } =
    useMutation({
      mutationFn: CreateEvent,
      onError: () => {
        toast({
          title: "Houve um erro ao criar o evento.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
      },
      onSuccess: () => {
        toast({
          title: "Evento criado com sucesso!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
      },
    });

  return { createEventMutation, createEventLoading };
};
