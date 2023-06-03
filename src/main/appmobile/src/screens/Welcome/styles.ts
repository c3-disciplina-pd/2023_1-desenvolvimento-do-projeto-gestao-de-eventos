import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;
export const View = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
export const ContainerForm = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;
export const TextTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 28px;
  margin-left: 8px;
  margin-bottom: 12px;
`;
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY};
  margin-left: 20px;
`;
export const TouchableOpacity = styled.TouchableOpacity`
  border-radius: 50px;
  width: 60%;
  height: 40px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.RED_DARK};
  margin-top: 20%;
`;
export const TextButtom = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;