import * as React from 'react';
import { Input } from "@components/Input";
import { YellowButton } from "@components/YellowButton";
import * as S from "./styles";
import userImg from "@assets/user.png";


import { RegisterUser, useGetUser, useUpdateUser } from "../../configs";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "../../assets";
import { useState, useEffect } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";


export function Edit() {

    const [userCpf, setUserCpf] = useState([{}]);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    useEffect(() => {
        const loadUser = async () => {
            const useGetUser = await AsyncStorage.getItem("userCPF");
            setUserCpf(useGetUser)
        }
        loadUser();
    }, []);

    const { data: user } = useGetUser({ cpf: userCpf });

    const initialValues = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        cpf: user?.cpf,
        email: user?.email,
        password: user?.password,
    };

    const {
        register,
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
        });
        navigation.navigate('Home');
    };

    return (


        <S.Container>
            <S.ContainerTop>
                <S.UserImage source={userImg} />
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
                <Input placeholder={user?.firstName} register={register("firstName")} error={errors.firstName} />
                <Input placeholder={user?.lastName} register={register("lastName")} error={errors.lastName} />
                <Input placeholder={user?.cpf} register={register("cpf")} error={errors.cpf} />
                <Input placeholder={user?.email} register={register("email")} error={errors.email} />
                <Input placeholder='|' register={register("password")} error={errors.password} secureTextEntry />
                <YellowButton
                    text="Editar"
                    onPress={() => { updateUserLoading }}

                />
            </S.ContainerBottom>
            {/* <Footer /> */}
        </S.Container>
    )

}