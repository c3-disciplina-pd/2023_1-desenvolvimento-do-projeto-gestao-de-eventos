import { Input } from "@components/Input";

import * as styles from "./styles";

export function Register() {
  return (
    <styles.Container>
      <styles.ContainerTop>
        <styles.TitleTop>Events Managment</styles.TitleTop>
      </styles.ContainerTop>
      <styles.ContainerBottom>
        <styles.TitleBottom>Criar conta</styles.TitleBottom>
        <Input placeholder="Digite seu nome" />
        <Input placeholder="Digite seu sobrenome" />
        <Input placeholder="Digite seu CPF" />
        <Input placeholder="Digite seu e-mail" />
        <Input placeholder="Digite sua senha" secureTextEntry />
        <styles.Button>
          <styles.TextButton>Cadastrar</styles.TextButton>
        </styles.Button>
      </styles.ContainerBottom>
    </styles.Container>
  );
}
