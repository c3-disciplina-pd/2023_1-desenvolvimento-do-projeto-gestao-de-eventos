import * as React from 'react';
import * as S from "./styles";
import theme from '../../theme';
import axios from 'axios';

import * as Clipboard from 'expo-clipboard';
import { useState, useEffect } from "react";
import { imgRoute } from '../../services/api'
import * as ImagePicker from 'expo-image-picker';
import { Controller, useForm } from "react-hook-form";
import { TextInputMask } from 'react-native-masked-text';
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Event, useCreateEvent, useGetUser } from "../../configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { ScrollView, Text, StyleSheet, RefreshControl, Alert, ToastAndroid } from 'react-native';
import { yupResolver } from "@hookform/resolvers/yup";
import { EventSchema } from "../../assets";
export function CreateEvent() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const [userCpf, setUserCpf] = useState([{}]);
  const [refreshing, setRefreshing] = useState(false);
  const { createEventMutation } = useCreateEvent();
  const [images, setImages] = useState<Array<string>>([]);
  const [test, setTest] = useState<Array<string>>([]);

  const copyToClipboard = () => {
    Clipboard.setStringAsync(test);
    alert('Texto Copiado!');
  };

  const fetchImages = async () => {
    const response = await fetch(imgRoute + `/image`);
    const json = await response.json();
    setImages(json)
  }
  const handlePickerImage = async () => {

    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: false,
      aspect: [4, 4],
      quality: 1,
    });

    if (result.cancelled) {
      ToastAndroid.show('Operação cancelada', ToastAndroid.SHORT);
    } else {
      const filename = result.uri.substring(result.uri.lastIndexOf('/') + 1, result.uri.length);

      setTest(filename)
      const extend = filename.split('.')[1];
      const formData = new FormData();
      formData.append('file', JSON.parse(JSON.stringify({
        name: filename,
        uri: result.uri,
        type: 'image/' + extend,
      }))); try {
        const response = await axios.post(imgRoute + `/image`, formData, {
          headers: {
            Accept: 'aplication/json',
            'Content-Type': 'multipart/form-data',
          }
        })
        if (response.data.error) {
          Alert.alert('erro', 'nao foi possivel enviar sua image')
        } else {
          Alert.alert('Link da imagem gerado com Sucesso ')
          fetchImages()
        }
      } catch (error) {
        alert('erro ao enviar sua imagem')
      }
    }
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Event>({
    mode: "onSubmit",
    resolver: yupResolver(EventSchema),
  });

  const { data: user } = useGetUser({ cpf: userCpf ?? "" });
  const onRefresh = () => {
    const loadUser = async () => {
      const useGetUser = await AsyncStorage.getItem("userCPF");
      await setUserCpf(useGetUser)
    }
    setRefreshing(true);
    setTimeout(() => {
      loadUser();
      setRefreshing(false);
    }, 100);
  }

  useEffect(() => {
    onRefresh();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      onRefresh();
      return () => { };
    }, []));

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
      hour: data.hour,
      type: user?.type,
    });
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
            <Text style={styles.labelError}> {errors.imageUrl?.message}</Text>)}


          <S.ContainerLinkImg>
            <S.Input onChangeText={setTest} value={test}
              placeholder="Baixar link da imagen" />
            <S.ImgButoon>
              <S.UploadImg onPress={handlePickerImage}>
                <S.Text> baixar  </S.Text>
              </S.UploadImg>
              <S.CopiarImg onPress={copyToClipboard}>
                <S.Text> copiar </S.Text>
              </S.CopiarImg>
            </S.ImgButoon>
          </S.ContainerLinkImg>

          {errors.imageUrl && (
            <Text style={styles.labelError}>{errors.imageUrl?.message}</Text>
          )}

          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { onChange, onBlur, value } }) => (
              <S.TextInput
                style={[{
                  borderWidth: errors.imageUrl && 1,
                  borderColor: errors.imageUrl && theme.COLORS.RED,
                },
                ]}
                placeholder="Cole o link da imagem "
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
                style={[{
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
              <TextInputMask
                style={styles.masked}
                type={'money'}
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
                placeholder="Total de Vagas"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='numeric'

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
              <TextInputMask
                style={styles.masked}
                type={'datetime'}
                options={{
                  format: 'DD-MM-YYYY'
                }}
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
              <TextInputMask
                style={styles.masked}
                type={'datetime'}
                options={{
                  format: 'HH:mm'
                }}
                placeholder="Hora do evento"
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
                placeholder="  Descrição do Evento"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
          <S.Button onPress={handleSubmit(submitRegisterForm)} >
            <S.TextButton>Cadastrar</S.TextButton>
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  masked: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    width:300,
    height: 50,
    marginBottom: 16,
    borderColor: '#C4C4CC',
  }
});

