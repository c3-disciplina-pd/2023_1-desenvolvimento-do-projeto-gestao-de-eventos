export type User = { cpf: string; password: string };

export enum UserType {
  Admin = "Admin",
  Manager = "Manager",
  User = "User",
}

export type RegisterUser = {
  firstName: string;
  lastName: string;
  cpf?: string;
  email: string;
  password: string;
  type?: UserType;
};

export type Event = {
  id?: number;
  name?: string;
  description?: string;
  imageUrl?: string;
  date?: Date | string | number | undefined;
  price?: number | string;
  vacancies?: number | string;
  location?: string;
  creator?: string;
  type?: UserType;
} & AdditionalInfosEvent;

type AdditionalInfosEvent = {
  cpf?: string;
  editor?: string;
  isEmphasis?: boolean | number;
};
