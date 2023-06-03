import styled from "styled-components/native";

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
export const FlatListTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.RED_700};
  margin-bottom: 16px;
`;
export const FlatList = styled.FlatList`
  width: 100%;
  height: 100%;
`;
export const CardItemTop = styled.TouchableOpacity``;

// horizontal card with left image and right title and subtitle
export const CardItem = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 5px;
`;
export const CardItemImage = styled.Image`
  width: 160px;
  height: 100px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;
export const CardItemTextContainer = styled.View`
  flex: 1;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.RED_700};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
export const CardItemTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const CardItemSubtitle = styled.Text`
  font-size: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;