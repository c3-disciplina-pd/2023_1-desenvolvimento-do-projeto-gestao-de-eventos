import * as S from "./styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import * as Animatable from "react-native-animatable";

export function Config() {

  let { setUser } = useContext(AuthContext);

  const handleLogout = () => {
    AsyncStorage.removeItem('userCPF')
    SecureStore.deleteItemAsync('accessToken')
    setUser(false)
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
        <S.Button onPress={handleLogout}>
          <S.TextButton>Logout</S.TextButton>
        </S.Button>
      </S.ContainerBottom>

    </S.Container >
  );
}
