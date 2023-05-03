import { api } from "../../services/api";
import { Event } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CreateEvent = async (data: Event): Promise<void> => {
  const cpf = AsyncStorage.getItem("userCPF");

  const response = await api.post(`/create-event/${cpf}`, data);
  return response.data;
};

export const GetEvents = async (): Promise<void> => {
  const response = await api.get("/events/all");
  return response.data;
};

export const GetEvent = async ({ id }: { id: number }): Promise<void> => {
  const response = await api.get(`/events/${id}`);
  return response.data;
};

export const UpdateEvent = async ({
  data,
  id,
}: {
  data: Event;
  id: number;
}): Promise<void> => {
  const cpf = AsyncStorage.getItem("userCPF");

  const response = await api.put(`/events/update/${id}/${cpf}`, data);
  return response.data;
};
