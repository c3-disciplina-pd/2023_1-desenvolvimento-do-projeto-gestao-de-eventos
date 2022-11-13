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

export type Event = {
  name: string;
  description: string;
  imageUrl: string;
  date: Date | string;
  price: number | string;
  vacancies: number | string;
  location: string;
  creator: string;
};
