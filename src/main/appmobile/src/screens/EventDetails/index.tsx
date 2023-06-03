import * as S from "./styles";
import * as React from 'react';

import { useState } from "react";
import { imgRoute } from '../../services/api'
import { ScrollView, RefreshControl } from "react-native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useGetUser, useGetEvent, useUpdateEvent, UserType } from "../../configs";

export function EventDetails() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const [refreshing, setRefreshing] = useState(false);
    const [eventName, setEventName] = useState();
    const { updateEventMutation, updateEventLoading } = useUpdateEvent();
    const [userCpf, setUserCpf] = useState([{}]);
    const { data: events } = useGetEvent({ name: String(eventName) });

    const onRefresh = () => {
        setRefreshing(true);

        const loadUser = async () => {
            const useGetUser = await AsyncStorage.getItem("userCPF");
            setUserCpf(useGetUser)
        }
        const loadId = async () => {
            const eventGetName = await AsyncStorage.getItem("name");
            setEventName(eventGetName);
        }
        setTimeout(() => {
            setRefreshing(false);
            loadUser();
            loadId();
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
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <S.TitleBottom>{events?.name}</S.TitleBottom>
                    <S.CardItemImage source={{ uri: imgRoute + `/public/uploads/icode-${events?.imageUrl}` }} resizeMode="stretch" />
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
                                    {events?.price === 'R$0,00' ? "Gratuito" : `R$ ${events?.price}`}
                                </S.CardItemSubtitle>
                            </S.CardItemTitle>
                        </S.CardItemTextContainer>
                    </S.CardItem>

                    <S.CardItem>
                        <S.CardItemTextContainer>
                            <S.CardItemTitle numberOfLines={2}>Data:{' '}
                                <S.CardItemSubtitle >
                                    {events?.date}
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
                    <S.CardItemButton>
                        <S.Button >
                            <S.TextButton>Inscrever</S.TextButton>
                        </S.Button>
                    </S.CardItemButton>

                </ScrollView>
            </S.ContainerBottom>
        </S.Container>
    );
}