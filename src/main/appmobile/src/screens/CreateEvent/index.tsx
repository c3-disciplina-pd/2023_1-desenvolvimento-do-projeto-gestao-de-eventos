import * as S from "./styles";
import { Input } from "@components/Input";
import { Footer } from "@components/Footer";
import { YellowButton } from "@components/YellowButton";
import { useForm, Controller } from "react-hook-form";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Event, useCreateEvent, useGetUser } from "../../configs";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { EventSchema } from "../../assets";

export function CreateEvent() {

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Event>({
    mode: "onSubmit",
    resolver: yupResolver(EventSchema),
  });

  const navigate = useNavigation();
  const { createEventMutation, createEventLoading } = useCreateEvent();

  const [userCpf, setUserCpf] = useState([{}]);

  const loadUser = async () => {
    const useGetUser = await AsyncStorage.getItem("userCPF");
    setUserCpf(useGetUser)
  }
  
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

  };

  return (
    <S.Container>
      <S.Title>Criar Evento</S.Title>
      <S.Form>
        
        <YellowButton text="Criar" onPress={() => {}} />
      </S.Form>
      {/* <Footer /> */}
    </S.Container>
  );
}
