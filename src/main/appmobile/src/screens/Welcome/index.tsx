import * as S from "./styles";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function Welcome() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();
    function handleLogin() {
        navigation.navigate("Login");
    }
    return (
        <S.Container>
            <S.View>
                <Animatable.Image
                    animation={"flipInY"}
                    source={require("../../assets/logo.png")}
                    style={{ width: "100%" }}
                    resizeMode="contain" />
            </S.View>
            <S.ContainerForm>
                <Animatable.View
                    delay={600}
                    animation={"fadeInUp"} >
                    <S.TextTitle> Extenção Universitária da unicap </S.TextTitle>
                    <S.Text onPress={handleLogin}>Faça login pra começar</S.Text>
                    <S.TouchableOpacity onPress={handleLogin}>
                        <S.TextButtom >Acessar</S.TextButtom>
                    </S.TouchableOpacity>
                </Animatable.View>
            </S.ContainerForm>
        </S.Container>
    );
}