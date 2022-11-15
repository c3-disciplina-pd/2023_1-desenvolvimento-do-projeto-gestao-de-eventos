import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";

import { CreateEvent, GetEvent, GetEvents } from "../requests";
import { Event } from "../types";

type UseCreateEventProps = {
  createEventMutation: UseMutateAsyncFunction<void, unknown, Event, unknown>;
  createEventLoading: boolean;
};

type UseGetUsersProps = {
  config?: UseQueryOptions<void, unknown, Event[], "all-events">;
};

type UseGetUserProps = {
  config?: UseQueryOptions<void, unknown, Event, [`event-${number}`, number]>;
  id: number;
};

export const useCreateEvent = (): UseCreateEventProps => {
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

export const useGetEvents = ({ config }: UseGetUsersProps) => {
  return useQuery("all-events", () => GetEvents(), config);
};

export const useGetEvent = ({ config, id }: UseGetUserProps) => {
  return useQuery([`event-${id}`, id], () => GetEvent({ id }), config);
};
