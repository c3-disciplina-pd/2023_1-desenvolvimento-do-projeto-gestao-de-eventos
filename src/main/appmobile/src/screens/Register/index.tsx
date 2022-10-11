import { Input } from "@components/Input";

import * as S from "./styles";

export function Register() {
  return (
    <S.Container>
      <S.ContainerTop>
        <S.TitleTop>Events Managment</S.TitleTop>
      </S.ContainerTop>
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
      </S.ContainerBottom>
    </S.Container>
  );
}
