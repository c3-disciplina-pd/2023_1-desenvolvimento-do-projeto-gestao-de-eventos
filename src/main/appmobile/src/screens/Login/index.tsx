import { Header } from '@components/Header';
import * as S from './styles';

export function Login() {
  return (
    <S.Container>
      <S.ContainerTop>
        <S.TitleTop>Events Management</S.TitleTop>
      </S.ContainerTop>
      <S.ContainerBottom>
        <S.TitleBottom>Login</S.TitleBottom>
        <S.Input placeholder="Email" />
        <S.Input placeholder="Password" secureTextEntry />
        <S.TextForgotPassword>Forgot your password?</S.TextForgotPassword>
      </S.ContainerBottom>
    </S.Container>
  );
}