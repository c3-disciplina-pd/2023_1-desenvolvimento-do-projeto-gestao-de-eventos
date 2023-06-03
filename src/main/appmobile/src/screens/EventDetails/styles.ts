import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
export const ContainerBottom = styled.View`
  flex: 4;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  align-items: center;
  justify-content: center;
  padding: 24px;
  margin-top: 50px;
  box-shadow: 10px 10px 5px black;
`;
export const TitleBottom = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_700};
  text-align: center;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const TitleBottomScroll = styled.Text`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_700};
  text-align: center;
`;
export const CardItemImage = styled.Image`
  flex: 1;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  align-items: center;
  justify-content: center;
  padding: 200px 200px 100px 100px;
`;
export const CardItem = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 5px;
`;
export const CardItemButton = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 5px;
  margin-top: 20px;
`;
export const CardItemTextContainer = styled.View`
  flex: 1;
  margin-left: 20px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const CardItemTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.RED_700};
`;
export const CardItemSubtitle = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
export const CardItemDecricao = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  margin-left: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.COLORS.RED_700};
  border-radius: 4px;
`;
export const TextButton = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.ST}px;
  `};
  text-align: center;
`;