import * as S from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import React, { useState } from 'react';
import * as Animatable from "react-native-animatable";
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from "expo-secure-store";


import { LoginSchema } from "../../assets";
import { useLogin, User } from "../../configs";
import { useEffect } from "react";



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
    } else {
      console.log('err')
    }
  };

  const submitLoginForm = ({ cpf, password }: User, data: any) => {
    loginMutation({ cpf, password });
    saveUser(data);
    setTimeout(() => isAuth(), 1000);
  };

  const saveUser = async (data: any) => {
    const cpfUser = await AsyncStorage.setItem("userCPF", data.cpf);
    console.log('salvo')
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
                <S.TextInput
                  style={[

                    {

                      borderColor: errors.cpf && theme.COLORS.RED,
                      borderTopColor: errors.cpf && theme.COLORS.RED,
                      borderBottomColor: errors.cpf && theme.COLORS.RED,
                    },
                  ]}
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
                    style={[
                      {
                        borderWidth: errors.password && 1,
                        borderColor: errors.password && theme.COLORS.RED,
                        borderTopColor: errors.cpf && theme.COLORS.RED,
                        borderBottomColor: errors.cpf && theme.COLORS.RED,
                      },
                    ]}
                    placeholder="Digite sua senha"
                    onChangeText={onChange}
                    onBlur={onBlur} //chamado quando o input é tocado
                    value={value}
                    secureTextEntry={hidePass}
                  />
                  <S.TouchableOpacity >
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