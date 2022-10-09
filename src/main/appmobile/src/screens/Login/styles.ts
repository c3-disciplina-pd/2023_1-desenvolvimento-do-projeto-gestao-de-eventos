import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GREEN_500};
    /* justify-content: center; */
    /* padding: 24px; */
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
    font-weight: bold;
`;

export const ContainerBottom = styled.View`
    flex: 2;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    /* justify-content: center; */
    padding: 52px 32px;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
`;

export const TitleBottom = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-weight: bold;
`;

export const Input = styled.TextInput`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 5px;
    padding: 0 16px;
    margin-top: 32px;
`;