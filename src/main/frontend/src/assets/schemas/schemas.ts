import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Preencha o e-mail da forma correta!")
    .required("E-mail incorreto!"),
  password: yup.string().required("Senha incorreta!"),
});
