import { Header } from "@components/Header";
import { Input } from "@components/Input";

import * as S from "./styles";

export function Register() {
  return (
    <S.Container>
      <Header />
      <S.ContainerBottom>
        <S.TitleBottom>Criar conta</S.TitleBottom>
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Digite seu sobrenome" />
        <Input placeholder="Digite seu CPF" />
        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Digite sua senha" secureTextEntry />
        <S.Button>
          <S.TextButton>Cadastrar</S.TextButton>
        </S.Button>
        <S.ContainerHaveAccount>
          <S.TextHaveAccount>Já tem uma conta?</S.TextHaveAccount>
          <S.ActionLogin>
            <S.TextLogin>Login</S.TextLogin>
          </S.ActionLogin>
        </S.ContainerHaveAccount>
      </S.ContainerBottom>
    </S.Container>
  );
}
