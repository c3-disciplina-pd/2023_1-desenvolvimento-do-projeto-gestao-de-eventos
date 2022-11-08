export type User = { cpf: string; password: string };

export enum UserType {
  Admin = "Admin",
  User = "User",
}

export type RegisterUser = {
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  password: string;
  type?: UserType;
};
