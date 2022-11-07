import { api } from "../../services";
import { RegisterUser, User } from "../types";

export const CreateUser = async (data: RegisterUser): Promise<void> => {
  const response = await api.post("/users/save", data);
  return response.data;
};

export const LoginUser = async (data: User): Promise<void> => {
  const response = await api.post("/login", data);
  if (response.status !== 500) {
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    localStorage.setItem("token", response.data.token);
    return response.data;
  } else {
    return;
  }
};
