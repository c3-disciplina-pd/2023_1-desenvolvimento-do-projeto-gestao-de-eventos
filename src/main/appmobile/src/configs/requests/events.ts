import { api } from "../../services/api";
import { Event } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CreateEvent = async (data: Event): Promise<void> => {
  const cpf = AsyncStorage.getItem("userCPF");

  const response = await api.post(`event/${cpf}`, data);
  return response.data;
};

export const GetEvents = async (): Promise<void> => {
  const response = await api.get("/event/all");
  return response.data;
};

export const GetEvent = async ({ id }: { id: number }): Promise<void> => {
  const response = await api.get(`/event/${id}`);
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

  const response = await api.put(`/event/${id}/${cpf}`, data);
  return response.data;
};
