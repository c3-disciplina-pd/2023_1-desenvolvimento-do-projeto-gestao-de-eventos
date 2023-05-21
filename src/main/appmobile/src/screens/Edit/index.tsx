import * as React from 'react';
import * as S from "./styles";
import theme from '../../theme';

import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';
import { RegisterUser, useGetUser, useUpdateUser } from "../../configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';
import { RegisterSchema } from "../../assets";
import { useState, useEffect } from "react";

import UserAvatar from 'react-native-user-avatar';


export function Edit() {
    const [userCpf, setUserCpf] = useState([{}]);

    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const [hidePass, setHidePass] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        const loadUser = async () => {
            const zero = '711.891.104-66'
            setUserCpf(zero)

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

    const { data: user } = useGetUser({ cpf: userCpf });

    const initialValues = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        cpf: user?.cpf,
        email: user?.email,
        password: user?.password,
        number: user?.number,
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<RegisterUser>({
        mode: "onSubmit",
        resolver: yupResolver(RegisterSchema),
        defaultValues: initialValues,
    });


    const { updateUserMutation, updateUserLoading } = useUpdateUser();

    const submitUpdateUser = async (data: RegisterUser) => {
        await updateUserMutation({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            number: data.number,
        });
        navigation.navigate('Home');
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
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                <S.ContainerTop>
                    <UserAvatar size={80} name={`${user?.firstName} ${user?.lastName}`} />
                    <S.UserInfo>
                        <S.UserName>
                            {user?.firstName} {user?.lastName}
                        </S.UserName>
                        <S.UserEmail>
                            {user?.email}
                        </S.UserEmail>
                    </S.UserInfo>
                </S.ContainerTop>


                <S.ContainerBottom>
                    <S.ContainerBottomTitle>
                        Editar informações do perfil
                    </S.ContainerBottomTitle>

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
                                placeholder={user?.firstName}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />

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
                                placeholder={user?.lastName}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={user?.lastName}
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
                                value={user?.cpf}
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
                                placeholder={user?.number}
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
                                placeholder={user?.email}
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

                    <S.Button onPress={handleSubmit(submitUpdateUser)} >
                        <S.TextButton>Editar</S.TextButton>
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
