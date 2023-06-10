import * as S from "./styles";
import { useContext } from "react";
import { Header } from "@components/Header";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from "expo-secure-store";
import { Controller, useForm } from "react-hook-form";
import * as Animatable from "react-native-animatable";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInputMask } from 'react-native-masked-text'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useEffect } from "react";
import { LoginSchema } from "../../assets";
import { useLogin, User } from "../../configs";

export function Login() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<User>({ mode: "onSubmit", resolver: yupResolver(LoginSchema) });

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  let { setUser } = useContext(AuthContext);

  const { loginMutation, loginLoading } = useLogin();
  const isAuth = async () => {
    const value = await SecureStore.getItemAsync('accessToken')

    if (value !== null) {
      setUser(true)
    }
  };

  const submitLoginForm = ({ cpf, password }: User, data: any) => {
    loginMutation({ cpf, password });
    saveUser(data);
    setTimeout(() => isAuth(), 1000);
  };

  const saveUser = async (data: any) => {
    const cpfUser = await AsyncStorage.setItem("userCPF", data.cpf);
  }

  useEffect(() => {
    isAuth();
  }, []);

  function handleRegister() {
    navigation.navigate("Register" as never);
  }
  const [hidePass, setHidePass] = useState(true);

  return (
    <S.Container >
      <Header />
      <S.ContainerBottom>
        <Animatable.View animation={"fadeInUp"} >
          <ScrollView>
            <S.TitleBottom>Entrar</S.TitleBottom>
            {errors.cpf && (
              <S.labelError >{errors.cpf?.message}</S.labelError>
            )}
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInputMask
                  style={styles.masked}
                  type={'cpf'}
                  placeholder="Digite seu CPF"
                  onChangeText={onChange}
                  onBlur={onBlur} //chamado quando o textinput é tocado
                  value={value}
                />
              )}
            />

            {errors.password && (
              <S.labelError >{errors.password?.message} </S.labelError>
            )}
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.ContainerPassword>
                  <S.Input
                    placeholder="Digite sua senha"
                    onChangeText={onChange}
                    onBlur={onBlur} //chamado quando o input é tocado
                    value={value}
                    secureTextEntry={hidePass}
                  />
                  <S.TouchableOpacity onPress={() => setHidePass(!hidePass)}>
                    <S.PasswordOpacity onPress={() => setHidePass(!hidePass)}>
                      <Ionicons name="eye" color="#121212" size={25} />
                    </S.PasswordOpacity>
                  </S.TouchableOpacity>
                </S.ContainerPassword>
              )}
            />
            <S.ContainerForgotPassword>
              <S.TextForgotPassword>Esqueceu sua senha?</S.TextForgotPassword>
              <S.ActionClickHere>
                <S.TextClickHere>Clique aqui</S.TextClickHere>
              </S.ActionClickHere>
            </S.ContainerForgotPassword>
            <S.Button onPress={handleSubmit(submitLoginForm)} >
              <S.TextButton >Entrar</S.TextButton>
            </S.Button>
            <S.ContainerDontHaveAccount>
              <S.TextDontHaveAccount>Não tem uma conta?</S.TextDontHaveAccount>
              <S.ActionRegister onPress={handleRegister}>
                <S.TextRegister>Cadastre-se</S.TextRegister>
              </S.ActionRegister>
            </S.ContainerDontHaveAccount>
          </ScrollView>
        </Animatable.View >
      </S.ContainerBottom>
    </S.Container>
  );
}
const styles = StyleSheet.create({
  masked: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    height: 50,
    marginBottom: 16,
  }
});