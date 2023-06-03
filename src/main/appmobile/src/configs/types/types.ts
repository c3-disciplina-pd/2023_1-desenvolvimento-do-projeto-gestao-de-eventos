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
  number: string;
  password: string;
  type?: UserType;
};

export type Event = {
  id?: number;
  name?: string;
  description?: string;
  imageUrl?: string;
  date?: string ;
  price?:  string;
  vacancies?:  string;
  location?: string;
  creator?: string;
  type?: UserType;
  hour?: string;
} & AdditionalInfosEvent;

type AdditionalInfosEvent = {
  cpf?: string;
  editor?: string;
  isEmphasis?: boolean | number;
};
