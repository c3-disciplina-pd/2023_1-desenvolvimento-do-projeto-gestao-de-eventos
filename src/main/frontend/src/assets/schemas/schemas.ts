import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Preencha o e-mail da forma correta!")
    .required("E-mail incorreto!"),
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
  cpf: yup.string().min(14, "Formato de CPF inválido").required("CPF incorreto"),
  password: yup.string().required("Preencha o campo!"),
});
