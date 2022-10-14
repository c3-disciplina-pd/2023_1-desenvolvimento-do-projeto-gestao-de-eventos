import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  margin-top: 8px;
  flex-direction: column;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding: 0 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
