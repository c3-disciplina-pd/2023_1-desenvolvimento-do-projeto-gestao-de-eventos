import * as S from "./styles";

import { useContext } from "react";
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "../../contexts/auth";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Config() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  let { setUser } = useContext(AuthContext);
  const handleLogout = () => {
    AsyncStorage.removeItem('userCPF')
    SecureStore.deleteItemAsync('accessToken')
    setUser(false)
  };

  const editarPerfil = () => {
    navigation.navigate('Edit')
  };

  return (
    <S.Container>
      <S.ContainerTop >
        <Animatable.Image
          animation={"flipInY"}
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </S.ContainerTop>
      <S.ContainerBottom  >
        <S.Button onPress={editarPerfil}>
          <S.TextButton>Editar perfil</S.TextButton>
        </S.Button>
        <S.Button onPress={handleLogout}>
          <S.TextButton>Logout</S.TextButton>
        </S.Button>
      </S.ContainerBottom>
    </S.Container >
  );
}
