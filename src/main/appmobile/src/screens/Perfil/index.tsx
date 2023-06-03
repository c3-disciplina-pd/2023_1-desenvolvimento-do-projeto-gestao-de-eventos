import * as S from "./styles";
import * as React from 'react';
import { useGetUser } from "../../configs";
import { useState, useEffect } from "react";
import UserAvatar from 'react-native-user-avatar';
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, RefreshControl } from 'react-native';
import { Zocial, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';

export function Perfil() {

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
            userRefetch();
            loadUser();
        }, 100);
    }

    useEffect(() => {
        onRefresh();
    }, []);

    const { data: user, refetch: userRefetch } = useGetUser({ cpf: userCpf });
    useFocusEffect(
        React.useCallback(() => {
            onRefresh();
            return () => {
            };
        }, [])
    );

    return (
        <S.Container>
            <S.BackgroundTop></S.BackgroundTop>
            <S.Avatar>
                <UserAvatar size={100} name={`${user?.firstName} ${user?.lastName}`} />
            </S.Avatar>
            <S.UserInfo>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }>
                    <S.Title> Perfil do Usuario </S.Title>
                    <S.UserPerfil>
                        <S.TouchableOpacity >
                            <Zocial name="persona" color="#121212" size={28} />
                        </S.TouchableOpacity>
                        <S.UserText>{user?.firstName}</S.UserText>
                    </S.UserPerfil>
                    <S.UserPerfil>
                        <S.TouchableOpacity >
                            <Zocial name="persona" color="#121212" size={28} />
                        </S.TouchableOpacity>
                        <S.UserText> {user?.lastName} </S.UserText>
                    </S.UserPerfil>
                    <S.UserPerfil>
                        <S.TouchableOpacity >
                            <MaterialIcons name="email" color="#121212" size={31} />
                        </S.TouchableOpacity>
                        <S.UserText> {user?.email}</S.UserText>
                    </S.UserPerfil>
                    <S.UserPerfil>
                        <S.TouchableOpacity >
                            <FontAwesome name="phone-square" color="#121212" size={32} />
                        </S.TouchableOpacity>
                        <S.UserText> {user?.number} </S.UserText>
                    </S.UserPerfil>
                    <S.UserPerfil>
                        <S.TouchableOpacity >
                            <Entypo name="v-card" color="#121212" size={33} />
                        </S.TouchableOpacity>
                        <S.UserText> {user?.cpf} </S.UserText>
                    </S.UserPerfil>
                </ScrollView>
            </S.UserInfo>
        </S.Container >
    );
}