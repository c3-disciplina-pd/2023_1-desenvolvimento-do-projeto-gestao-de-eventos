import { Header } from "@components/Header";
import { Input } from "@components/Input";
import * as S from "./styles";
import logoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleRegister() {
    navigation.navigate("Register");
  }

  return (
    <S.Container>
      <Header />
      <S.ContainerBottom>
        <S.TitleBottom>Entrar</S.TitleBottom>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <S.ContainerForgotPassword>
          <S.TextForgotPassword>Esqueceu sua senha?</S.TextForgotPassword>
          <S.ActionClickHere>
            <S.TextClickHere>Clique aqui</S.TextClickHere>
          </S.ActionClickHere>
        </S.ContainerForgotPassword>
        <S.Button>
          <S.TextButton>Entrar</S.TextButton>
        </S.Button>
        <S.ContainerDontHaveAccount>
          <S.TextDontHaveAccount>Não tem uma conta?</S.TextDontHaveAccount>
          <S.ActionRegister onPress={handleRegister}>
            <S.TextRegister>Cadastre-se</S.TextRegister>
          </S.ActionRegister>
        </S.ContainerDontHaveAccount>
      </S.ContainerBottom>
    </S.Container>
  );
}
