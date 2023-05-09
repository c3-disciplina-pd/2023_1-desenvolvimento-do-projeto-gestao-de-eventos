import { ScrollView, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';
import { Header } from "@components/Header";

import React, { useState } from 'react';
import theme from '../../theme';
import * as S from "./styles";


import { RegisterUser, useCreateUser } from "../../configs";
import { RegisterSchema } from "../../assets";

export function Register() {

  const [hidePass, setHidePass] = useState(true);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUser>({
    mode: "onSubmit",
    resolver: yupResolver(RegisterSchema),
  });

  const navigation = useNavigation();
  const { createUserMutation, createUserLoading } = useCreateUser();

  function handleGoBack() {
    navigation.goBack();
  }

  const submitRegisterForm = async (data: RegisterUser) => {
    await createUserMutation({
      firstName: data.firstName,
      lastName: data.lastName,
      cpf: data.cpf,
      email: data.email,
      number: data.number,
      password: data.password,
    });
    handleGoBack();
  };

  return (
    <S.Container>
      <Header />
      <S.ContainerBottom>
        <Animatable.View animation={"fadeInUp"} >
          <ScrollView>
            <S.TitleBottom>Criar conta</S.TitleBottom>

            {errors.firstName && (
              <Text style={styles.labelError}> {errors.firstName?.message}</Text>
            )}

            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  style={[

                    {
                      borderWidth: errors.firstName && 1,
                      borderColor: errors.firstName && theme.COLORS.RED_700,
                    },
                  ]}
                  placeholder="Digite seu Nome"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.lastName && (
              <Text style={styles.labelError}>{errors.lastName?.message}</Text>
            )}

            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  style={[

                    {
                      borderWidth: errors.lastName && 1,
                      borderColor: errors.lastName && theme.COLORS.RED,
                    },
                  ]}
                  placeholder="Digite seu Sobrenome"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

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
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />

            {errors.email && (
              <Text style={styles.labelError}>{errors.email?.message}</Text>
            )}

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  style={[

                    {
                      borderWidth: errors.email && 1,
                      borderColor: errors.email && theme.COLORS.RED,
                    },
                  ]}
                  placeholder="Digite seu email..."
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
            {errors.number && (
              <Text style={styles.labelError}>{errors.number?.message}</Text>
            )}

            <Controller
              control={control}
              name="number"
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  style={[

                    {
                      borderWidth: errors.number && 1,
                      borderColor: errors.number && theme.COLORS.RED,
                    },
                  ]}
                  placeholder="Digite seu telefone..."
                  onChangeText={onChange}
                  onBlur={onBlur}
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
                    placeholder="Digite sua senha..."
                    onChangeText={onChange}
                    onBlur={onBlur}
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

            <S.Button onPress={handleSubmit(submitRegisterForm)} >
              <S.TextButton>Cadastrar</S.TextButton>
            </S.Button>

            <S.ContainerHaveAccount>
              <S.TextHaveAccount>Já tem uma conta?</S.TextHaveAccount>
              <S.ActionLogin onPress={handleGoBack}>
                <S.TextLogin>Login</S.TextLogin>
              </S.ActionLogin>
            </S.ContainerHaveAccount>

          </ScrollView>
        </Animatable.View>
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

