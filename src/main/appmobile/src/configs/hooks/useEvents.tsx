import { useToast } from "@chakra-ui/react";
import {
  UseMutateAsyncFunction,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "react-query";

import { CreateEvent, GetEvent, GetEvents, UpdateEvent } from "../requests";
import { Event } from "../types";

type UseCreateEventProps = {
  createEventMutation: UseMutateAsyncFunction<void, unknown, Event, unknown>;
  createEventLoading: boolean;
};

type UseUpdateEventProps = {
  updateEventMutation: UseMutateAsyncFunction<
    void,
    unknown,
    { data: Event; id: number },
    unknown
  >;
  updateEventLoading: boolean;
};

type UseGetUsersProps = {
  config?: UseQueryOptions<void, unknown, Event[], "all-events">;
};

type UseGetUserProps = {
  config?: UseQueryOptions<void, unknown, Event, [`event-${string}`, string]>;
  name: string;
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
        alert("Houve um erro ao criar o evento");
      },
      onSuccess: () => {
          toast({
            title: "Evento criado com sucesso!",
            duration: 3000,
            isClosable: true,
            status: "success",
          });
        alert("Evento criado com sucesso!");
      },
    });

  return { createEventMutation, createEventLoading };
};

export const useUpdateEvent = (): UseUpdateEventProps => {
  const toast = useToast();
  const { mutateAsync: updateEventMutation, isLoading: updateEventLoading } =
    useMutation({
      mutationFn: UpdateEvent,
      onError: () => {
        toast({
          title: "Houve um erro ao realizar a ação.",
          duration: 3000,
          isClosable: true,
          status: "error",
        });
        alert("Houve um erro ao realizar a ação.");
      },
      onSuccess: () => {
        toast({
          title: "Ação realizada com sucesso!",
          duration: 3000,
          isClosable: true,
          status: "success",
        });
        alert("Ação realizada com sucesso!");
      },
    });

  return { updateEventMutation, updateEventLoading };
};

export const useGetEvents = ({ config }: UseGetUsersProps) => {
  return useQuery("all-events", () => GetEvents(), config);
};

export const useGetEvent = ({ config, name }: UseGetUserProps) => {
  return useQuery([`event-${name}`, name], () => GetEvent({ name }), config);
};
