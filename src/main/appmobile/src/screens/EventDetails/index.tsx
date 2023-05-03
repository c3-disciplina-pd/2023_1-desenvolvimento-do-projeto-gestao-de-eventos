import * as S from "./styles";
import * as React from 'react';
import { useState, useEffect } from "react";
import { ScrollView, RefreshControl, Text } from "react-native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useGetUser, useGetEvent, useUpdateEvent, UserType } from "../../configs";

export function EventDetails() {

    const [refreshing, setRefreshing] = useState(false);

    const [eventId, setEventId] = useState();

    const { updateEventMutation, updateEventLoading } = useUpdateEvent();

    const [userCpf, setUserCpf] = useState([{}]);

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const onRefresh = () => {
        const loadUser = async () => {

            const useGetUser = await AsyncStorage.getItem("userCPF");
            setUserCpf(useGetUser)
        }

        setRefreshing(true);

        const loadId = async () => {
            const zero = '0'
            setEventId(zero)

            const eventGetId = await AsyncStorage.getItem(`id`);
            setEventId(eventGetId);
        }

        setTimeout(() => {
            setRefreshing(false);
            loadId();
            loadUser();
        }, 100);
    }

    const { data: user } = useGetUser({ cpf: userCpf });

    const addEventToEmphasis = async () => {
        await updateEventMutation({
            id: events?.id ?? 0,
            data: {
                cpf: user?.cpf ?? "",
                editor: user?.lastName ?? "",
                type: user?.type ?? undefined,
                isEmphasis: events?.isEmphasis === true ? false : true,
            },
        });
        navigation.navigate('Home')
    };


    useEffect(() => {
        onRefresh();
    }, []);

    const { data: events } = useGetEvent({ id: Number(eventId) });

    const eventDate = new Date(events?.date ?? "");

    useFocusEffect(
        React.useCallback(() => {
            onRefresh();
            return () => {

            };
        }, [])
    );


    return (
        <S.Container>


            <S.ContainerBottom>
                <ScrollView refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>




                    <S.TitleBottom>{events?.name}</S.TitleBottom>
                    <S.CardItemImage source={{ uri: events?.imageUrl }} resizeMode="stretch" />

                    <S.TitleBottom>{'          '} Detalhes do Evento {'           '} </S.TitleBottom>

                    <S.CardItem>
                        <S.CardItemTextContainer>
                            <S.CardItemTitle numberOfLines={2}>Nome do evento:{' '}
                                <S.CardItemSubtitle >
                                    {events?.name}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                            <S.CardItemTitle numberOfLines={2}>Total de vagas:{' '}
                                <S.CardItemSubtitle >
                                    {events?.vacancies}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                            <S.CardItemTitle numberOfLines={2}>Valor:{' '}
                                <S.CardItemSubtitle >
                                    {events?.price === 0 ? "Gratuito" : `R$ ${events?.price}`}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                        </S.CardItemTextContainer>
                    </S.CardItem>

                    <S.CardItem>
                        <S.CardItemTextContainer>
                            <S.CardItemTitle numberOfLines={2}>Data:{' '}
                                <S.CardItemSubtitle >
                                    {eventDate.toLocaleDateString("pt-BR")}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                            <S.CardItemTitle numberOfLines={2}>Local:{' '}
                                <S.CardItemSubtitle >
                                    {events?.location}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                            <S.CardItemTitle numberOfLines={2}>Promovido por:{' '}
                                <S.CardItemSubtitle >
                                    {events?.creator}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>

                        </S.CardItemTextContainer>
                    </S.CardItem>

                    <S.TitleBottom>Descrição</S.TitleBottom>
                    <S.CardItem>
                        <S.CardItemTextContainer>
                            <S.CardItemDecricao >
                                {events?.description}
                            </S.CardItemDecricao>
                        </S.CardItemTextContainer>
                    </S.CardItem>
                    {user?.lastName === events?.creator &&
                        user?.type === UserType.Admin && (
                            <S.CardItemButton>
                                <S.Button onPress={addEventToEmphasis}  >
                                <S.TextButton>{
                                        events?.isEmphasis
                                            ? "Remover dos destaques"
                                            : "Adicionar aos Destaques"
                                    }</S.TextButton>
                                </S.Button>
                            </S.CardItemButton>
                        )}

                </ScrollView>
            </S.ContainerBottom>
        </S.Container>
    );
}

