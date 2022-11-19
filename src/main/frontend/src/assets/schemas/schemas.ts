import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  cpf: yup
    .string()
    .min(14, "Formato de CPF inválido")
    .required("CPF incorreto"),
  password: yup.string().required("Senha incorreta!"),
});

export const RegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/,
      "Formato de nome inválido"
    )
    .required("Preencha o campo!"),
  lastName: yup
    .string()
    .matches(
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/,
      "Formato de sobrenome inválido"
    )
    .required("Preencha o campo!"),
  email: yup
    .string()
    .email("Preencha o e-mail da forma correta!")
    .required("Preencha o campo!"),
  cpf: yup
    .string()
    .min(14, "Formato de CPF inválido")
    .required("CPF incorreto"),
  password: yup.string().required("Preencha o campo!"),
});

export const EventSchema = yup.object().shape({
  imageUrl: yup.string().required("Preencha o campo!"),
  name: yup.string().required("Preencha o campo!"),
  description: yup.string().required("Preencha o campo!"),
  location: yup.string().required("Preencha o campo!"),
  date: yup.string().required("Preencha a data corretamente!"),
  vacancies: yup.string().required("Preencha o campo!"),
  price: yup
    .number()
    .typeError("Insira apenas ponto e números")
    .required("Preencha o horário corretamente!"),
});
