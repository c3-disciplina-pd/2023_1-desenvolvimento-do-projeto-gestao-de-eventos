import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
export const ContainerLinkImg = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: 10%;
`;
export const Text = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 25%;
`;
export const UploadImg = styled.TouchableOpacity`
  align-items: center;
  border-radius: 5px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  right: 100%;
  top: -4%;
  height: 200%;
  width: 40%;
`;
export const CopiarImg = styled.TouchableOpacity`
  border-radius: 5px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  left: 100%;
  top: -4%;
  height: 200%;
  width: 40%;
`;
export const ImgButoon = styled.View`
  flex-direction: row;
`;
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
