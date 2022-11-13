import Cookies from "js-cookie";
import { api } from "../../services";
import { Event } from "../types";

export const CreateEvent = async (data: Event): Promise<void> => {
  const cpf = Cookies.get("userCPF");

  const response = await api.post(`/create-event/${cpf}`, data);
  return response.data;
};
