import Cookies from "js-cookie";
import { api } from "../../services";
import { Event } from "../types";

export const CreateEvent = async (data: Event): Promise<void> => {
  const cpf = Cookies.get("userCPF");

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
  const cpf = Cookies.get("userCPF");

  const response = await api.put(`/events/update/${id}/${cpf}`, data);
  return response.data;
};
