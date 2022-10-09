import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
`;

export const ContainerTop = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const TitleTop = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
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
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    padding: 0 16px;
    margin-top: 32px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ContainerForgotPassword = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 8px;
`;

export const TextForgotPassword = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ActionClickHere = styled.TouchableOpacity`
    margin-left: 4px;
`;

export const TextClickHere = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_700};
    border-radius: 5px;
    margin-top: 32px;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContainerDontHaveAccount = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;
`;

export const TextDontHaveAccount = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const ActionRegister = styled.TouchableOpacity`
    margin-left: 4px;
`;

export const TextRegister = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;