import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;
export const ContainerBottom = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 52px 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;
export const TitleBottom = styled.Text`
  padding-bottom: 20px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
`;
export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  height: 50px;
  width: 100%;
  margin-bottom: 16px;
`;
export const TextInput = styled.TextInput`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
  height: 50px;
  margin-bottom: 16px;
`;
export const TouchableOpacity = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  padding: 7.6px;
  bottom: 2.8%;
  right: 9%;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 50px;
`;
export const PasswordOpacity = styled.TouchableOpacity`
  align-items: center;
`;
export const ContainerPassword = styled.View`
  flex-direction: row;
  width: 89%;
  align-items: center;
`;
export const ContainerForgotPassword = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 8px;
`;
export const TextForgotPassword = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
export const ActionClickHere = styled.TouchableOpacity`
  margin-left: 4px;
`;
export const TextClickHere = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
export const Button = styled.TouchableOpacity`
  width: 100%;
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
export const labelError = styled.Text`
  align-self: flex-start;
  margin-bottom: 2px;
  margin-top: 0px;
  color: ${({ theme }) => theme.COLORS.RED};
`;
export const ContainerDontHaveAccount = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 22px;
`;
export const TextDontHaveAccount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
export const ActionRegister = styled.TouchableOpacity`
  margin-left: 4px;
`;
export const TextRegister = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
