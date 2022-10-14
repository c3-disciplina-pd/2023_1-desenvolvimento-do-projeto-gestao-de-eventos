import { api } from "../../services";
import { RegisterUser } from "../types";

export const CreateUser = async (data: RegisterUser): Promise<void> => {
  const response = await api.post("/users/save", data);
  return response.data;
};