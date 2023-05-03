import styled, { css } from "styled-components/native";

export const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY};
  border-right-color: ${({ theme }) => theme.COLORS.GRAY};
  border-top-color: ${({ theme }) => theme.COLORS.GRAY};
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
export const ContainerPassword = styled.View`
  flex-direction: row;
  width: 90%;
  align-items: center;
  right: 3%;
`;
export const TouchableOpacity = styled.View`
  justify-content: center;
  padding: 5px;
`;
export const PasswordOpacity = styled.TouchableOpacity``;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  border-left-color: ${({ theme }) => theme.COLORS.GRAY};
  border-right-color: ${({ theme }) => theme.COLORS.GRAY};
  border-top-color: ${({ theme }) => theme.COLORS.GRAY};
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY};
`;
export const ContainerTop = styled.View`
  flex: 0.1;
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px 24px 24px 54px;
  flex-direction: row;
  margin-top: 30px;
`;

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const UserInfo = styled.View`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: black;
`;

export const UserEmail = styled.Text`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.RED_700};
`;

export const ContainerBottom = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const ContainerBottomTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  margin-top: 50px;
  color: ${({ theme }) => theme.COLORS.RED_700};

`;
export const Button = styled.TouchableOpacity`
  width: 50%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.RED_700};
  border-radius: 5px;
  margin-top: 32px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
