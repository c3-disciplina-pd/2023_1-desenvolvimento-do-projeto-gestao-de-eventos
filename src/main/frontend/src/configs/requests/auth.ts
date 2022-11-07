import { api } from "../../services";
import { RegisterUser, User } from "../types";

export const CreateUser = async (data: RegisterUser): Promise<void> => {
  const response = await api.post("/users/save", data);
  return response.data;
};

export const LoginUser = async (data: User): Promise<void> => {
  const response = await api.post("/login", data);
  console.log(response.data);
  return response.data;
};
