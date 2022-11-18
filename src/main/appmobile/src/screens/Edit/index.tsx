import { Footer } from "@components/Footer";
import { Input } from "@components/Input";
import { YellowButton } from "@components/YellowButton";
import * as S from "./styles";
import userImg from "@assets/user.png";

export function Edit(){
    return (
        <S.Container>
            <S.ContainerTop>
                <S.UserImage source={userImg} />
                <S.UserInfo>
                <S.UserName>
                    Almeida Gomes
                </S.UserName>
                <S.UserEmail>
                    davi@moment.com
                </S.UserEmail>
                </S.UserInfo>
            </S.ContainerTop>
            <S.ContainerBottom>
                <S.ContainerBottomTitle>
                    Editar informações do perfil
                </S.ContainerBottomTitle>
                <Input placeholder="Primeiro Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Email" />
                <Input placeholder="Senha" secureTextEntry />
                <Input placeholder="Confirmar Senha" secureTextEntry />
                <YellowButton 
                text="Editar"
                onPress={() => {}}
                />
            </S.ContainerBottom>
            <Footer />
        </S.Container>
    )
}