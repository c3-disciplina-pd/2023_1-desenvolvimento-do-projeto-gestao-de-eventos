import { api } from "../../services/api";
import { RegisterUser, User } from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

export const CreateUser = async (data: RegisterUser): Promise<void> => {
  const response = await api.post("/user/", data);
  return response.data;
};

export const GetUser = async ({ cpf }: { cpf: string }): Promise<void> => {
  const response = await api.get(`/user/${cpf}`);
  return response.data;
};

export const LoginUser = async (data: User): Promise<void> => {
  const response = await api.get(`/login/${data.cpf}/${data.password}`);
  if (response.status !== 401) {
    const token = "300";
    await SecureStore.setItemAsync("accessToken", token);
    await AsyncStorage.setItem("userCPF", data.cpf);
    return response.data;
  }
};

export const UpdateUser = async (data: RegisterUser): Promise<void> => {
  const cpf = await AsyncStorage.getItem("userCPF");
  const response = await api.put(`/user/${cpf}`, data);
  return response.data;
};
