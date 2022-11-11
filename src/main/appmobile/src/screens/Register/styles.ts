import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;

export const ContainerBottom = styled.View`
  flex: 3;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

export const TitleBottom = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `};
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.RED_700};
  border-radius: 5px;
  margin-top: 16px;
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

export const ContainerHaveAccount = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  margin-top: 4px;
`;

export const TextHaveAccount = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const ActionLogin = styled.TouchableOpacity`
  margin-left: 4px;
`;

export const TextLogin = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
