import * as React from 'react';
import * as S from "./styles";
import theme from '../../theme';

import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Event, useCreateEvent, useGetUser, useGetEvents } from "../../configs";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { EventSchema } from "../../assets";


export function CreateEvent() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Event>({
    mode: "onSubmit",
    resolver: yupResolver(EventSchema),
  });


  const { createEventMutation, createEventLoading } = useCreateEvent();

  const [userCpf, setUserCpf] = useState([{}]);
  const [refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
   
    const loadUser = async () => {
      const useGetUser = await AsyncStorage.getItem("userCPF");
      setUserCpf(useGetUser)
    }

    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      loadUser();
    }, 100);
  }

  useEffect(() => {
    onRefresh();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      onRefresh();
      return () => {

      };
    }, [])
  );

  const { data: user } = useGetUser({ cpf: userCpf ?? "" });

  const submitRegisterForm = async (data: Event) => {
    await createEventMutation({
      name: data.name,
      description: data.description,
      date: data.date,
      price: data.price,
      creator: user?.lastName,
      vacancies: data.vacancies,
      imageUrl: data.imageUrl,
      location: data.location,
      type: user?.type,
    });
    onRefresh();
    navigation.navigate("Home");
  };

  return (
    <S.Container>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <S.ContainerBottom>

          <S.ContainerBottomTitle>
            Cadastro de  Novo Evento
          </S.ContainerBottomTitle>

          {errors.imageUrl && (
            <Text style={styles.labelError}> {errors.imageUrl?.message}</Text>
          )}

          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { onChange, onBlur, value } }) => (
              <S.TextInput
                style={[

                  {
                    borderWidth: errors.imageUrl && 1,
                    borderColor: errors.imageUrl && theme.COLORS.RED_700,
                  },
                ]}
                placeholder="Link do Banner"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />

          {errors.name && (
            <Text style={styles.labelError}>{errors.name?.message}</Text>
          )}

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => (
              <S.TextInput
                style={[

                  {
                    borderWidth: errors.name && 1,
                    borderColor: errors.name && theme.COLORS.RED,
                  },
                ]}
                placeholder="Nome do Evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />



          {errors.price && (
            <Text style={styles.labelError}>{errors.price?.message}</Text>
          )}

          <Controller
            control={control}
            name="price"
            render={({ field: { onChange, onBlur, value } }) => (
              <S.TextInput
                style={[

                  {
                    borderWidth: errors.price && 1,
                    borderColor: errors.price && theme.COLORS.RED,
                  },
                ]}
                placeholder="Valor"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />

          {errors.vacancies && (
            <Text style={styles.labelError}>{errors.vacancies?.message}</Text>
          )}

          <Controller
            control={control}
            name="vacancies"
            render={({ field: { onChange, onBlur, value } }) => (

              <S.Input
                style={[
                  {
                    borderWidth: errors.vacancies && 1,
                    borderColor: errors.vacancies && theme.COLORS.RED,
                  },
                ]}
                placeholder="Total de Vagas"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />
          {errors.date && (
            <Text style={styles.labelError}>{errors.date?.message}</Text>
          )}

          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, onBlur, value } }) => (

              <S.Input
                style={[
                  {
                    borderWidth: errors.date && 1,
                    borderColor: errors.date && theme.COLORS.RED,
                  },
                ]}
                placeholder="Data do evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />
          {errors.hour && (
            <Text style={styles.labelError}>{errors.hour?.message}</Text>
          )}

          <Controller
            control={control}
            name="hour"
            render={({ field: { onChange, onBlur, value } }) => (

              <S.Input
                style={[
                  {
                    borderWidth: errors.hour && 1,
                    borderColor: errors.hour && theme.COLORS.RED,
                  },
                ]}
                placeholder="horario do evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />
          {errors.location && (
            <Text style={styles.labelError}>{errors.location?.message}</Text>
          )}

          <Controller
            control={control}
            name="location"
            render={({ field: { onChange, onBlur, value } }) => (

              <S.Input
                style={[
                  {
                    borderWidth: errors.location && 1,
                    borderColor: errors.location && theme.COLORS.RED,
                  },
                ]}
                placeholder="Local do evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />
          {errors.description && (
            <Text style={styles.labelError}>{errors.description?.message}</Text>
          )}

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, onBlur, value } }) => (

              <S.Input
                style={[
                  {
                    borderWidth: errors.description && 1,
                    borderColor: errors.description && theme.COLORS.RED,
                  },
                ]}
                placeholder="  Descrição do Evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}

              />
            )}
          />

          <S.Button onPress={handleSubmit(submitRegisterForm)} >
            <S.TextButton>cadastrar</S.TextButton>
          </S.Button>

        </S.ContainerBottom>
      </ScrollView>
      {/* <Footer /> */}
    </S.Container >
  )
}

const styles = StyleSheet.create({
  labelError: {
    alignSelf: "flex-start",
    color: theme.COLORS.RED,
    marginBottom: 2,
    marginTop: 0,
  },
});

