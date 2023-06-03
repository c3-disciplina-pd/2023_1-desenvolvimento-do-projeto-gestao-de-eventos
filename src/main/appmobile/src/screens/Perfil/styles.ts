import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  align-items: center;
`;
export const Avatar = styled.View`
  position: absolute;
  border-radius: 70px;
  top: 17%;
  border: 10px solid #fff;
`;
export const BackgroundTop = styled.View`
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  width: 100%;
  height: 25%;
`;
export const UserInfo = styled.View`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
  margin-bottom: 50px;
`;
export const UserPerfil = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: 10%;
  border-radius: 5px;
  margin-bottom: 20px;
  left: 5%;
`;
export const UserText = styled.Text`
  font-size: 18px;
  color: white;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  padding: 7.6px;
  width: 85%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;
export const TouchableOpacity = styled.View`
  width: 15%;
  padding: 3px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-left-width: 1px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;