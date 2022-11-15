import { api } from "../../services";
import { RegisterUser, User } from "../types";

import Cookies from "js-cookie";

export const CreateUser = async (data: RegisterUser): Promise<void> => {
  const response = await api.post("/users/save", data);
  return response.data;
};

export const GetUser = async ({ cpf }: { cpf: string }): Promise<void> => {
  const response = await api.get(`/users/${cpf}`);
  return response.data;
};

export const LoginUser = async (data: User): Promise<void> => {
  const response = await api.post("/login", data);

  if (response.status !== 401) {
    localStorage.setItem("accessToken", response.data.token);
    Cookies.set("userCPF", data.cpf);

    return response.data;
  } else {
    return;
  }
};

export const UpdateUser = async (data: RegisterUser): Promise<void> => {
  const cpf = Cookies.get("userCPF");

  const response = await api.put(`/users/update/${cpf}`, data);
  return response.data;
};
