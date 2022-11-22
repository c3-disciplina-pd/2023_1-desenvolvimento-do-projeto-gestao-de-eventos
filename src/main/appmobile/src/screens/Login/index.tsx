import { Header } from "@components/Header";
import { Input } from "@components/Input";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useLogin } from "../../hooks/useLogin";

export function Login() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [loggedIn, setLoggedIn] = useLogin();

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
        <S.Button
          onPress={() => {
            setLoggedIn(true);
            console.log(loggedIn);
          }}
        >
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
