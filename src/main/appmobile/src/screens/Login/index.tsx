import { Header } from "@components/Header";
import { Input } from "@components/Input";
import * as S from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import * as yup from "yup";
import React, { useState } from 'react';
import * as Animatable from "react-native-animatable";
import { ScrollView, TextInput, View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import theme from '../../theme';
import Axios from "axios";

const schema = yup.object({
  cpf: yup.string().required("Informe seu cpf"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 digitos")
    .required("informe sua senha"),
});

export function Login() {

  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  let { setUser } = useContext(AuthContext);


  function handleRegister() {
    navigation.navigate("Register");
  }
  const [hidePass, setHidePass] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSignIn(data: any) {
    Axios.post("http://192.168.1.2:8080/login", {

      cpf: data.cpf,
      password: data.password,
    }).then((response) => {
      if (response.data.msg !== null) {
        setUser(true);
      } else {
        alert(response.data.msg);
      }
    });
  };


  return (
    <S.Container>
      <Header />
      <S.ContainerBottom>
        <Animatable.View animation={"fadeInUp"} >
          <ScrollView>
            <S.TitleBottom>Entrar</S.TitleBottom>

            {errors.cpf && (
              <Text style={styles.labelError}>{errors.cpf?.message}</Text>
            )}
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  style={[

                    {
                      borderWidth: errors.cpf && 1,
                      borderColor: errors.cpf && theme.COLORS.RED,
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
              <Text style={styles.labelError}>{errors.password?.message}</Text>
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

            <S.Button onPress={handleSubmit(handleSignIn)}>
              <S.TextButton>Entrar</S.TextButton>
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
  labelError: {
    alignSelf: "flex-start",
    color: theme.COLORS.RED,
    marginBottom: 2,
    marginTop: 0,
  },
});
