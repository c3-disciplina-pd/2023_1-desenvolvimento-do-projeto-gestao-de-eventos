import * as React from 'react';
import * as S from "./styles";
import theme from '../../theme';
import { ScrollView, Text, StyleSheet, RefreshControl } from 'react-native';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { RegisterUser, useGetUser, useUpdateUser } from "../../configs";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { TextInputMask } from 'react-native-masked-text'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Ionicons } from '@expo/vector-icons';
import { RegisterSchema } from "../../assets";
import { useState, useEffect } from "react";

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
            userRefetch();
            loadUser();
        }, 100);
    }

    useEffect(() => {
        onRefresh();
    }, []);

    const { data: user, refetch: userRefetch } = useGetUser({ cpf: userCpf });
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
        navigation.navigate('Perfil');
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
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <S.ContainerTop></S.ContainerTop>
                <S.ContainerBottom>
                    <S.ContainerBottomTitle> Editar informações do perfil </S.ContainerBottomTitle>
                    {errors.cpf && (
                        <Text style={styles.labelError}> {errors.cpf?.message}</Text>
                    )}
                    <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <S.TextInput
                                placeholder={user?.cpf}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={user?.cpf}
                            />
                        )}
                    />
                    {errors.firstName && (
                        <Text style={styles.labelError}> {errors.firstName?.message}</Text>
                    )}
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <S.TextInput
                                placeholder='Digite seu Nome...'
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                    {errors.lastName && (
                        <Text style={styles.labelError}> {errors.lastName?.message}</Text>
                    )}
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <S.TextInput
                                placeholder='Digite seu Sobrenome...'
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
                            <TextInputMask
                                style={styles.masked}
                                type={'cel-phone'}
                                placeholder='Digite seu Numero de telefone...'
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
                                placeholder='Digite seu Email...'
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
                                    placeholder="Digite sua senha..."
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    secureTextEntry={hidePass}
                                />
                                <S.TouchableOpacity >
                                    <S.PasswordOpacity onPress={() => setHidePass(!hidePass)}>
                                        <Ionicons name="eye" color="#121212" size={30} />
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
    masked: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        height: 50,
        marginBottom: 16,
        width: 320,
    }
});
