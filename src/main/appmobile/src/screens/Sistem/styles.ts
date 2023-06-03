import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  align-items: center;
`;
export const ContainerTop = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  align-items: center;
  justify-content: center;
  padding: 64px 24px 24px 24px;
`;
export const ContainerBottom = styled.View`
  flex: 2;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  padding: 32px;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
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