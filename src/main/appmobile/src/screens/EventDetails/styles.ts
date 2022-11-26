import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
`;

export const ContainerTop = styled.View`
    flex: 1;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
    align-items: center;
    justify-content: center;
    padding: 64px 24px 24px 24px;
`;

export const TitleTop = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
`;

export const ContainerBottom = styled.View`
    flex: 4;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    align-items: center;
    justify-content: center;
    padding: 24px;
    box-shadow: 10px 10px 5px black;
`;

export const TitleBottom = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.RED_700};
    text-align: center;
    margin-bottom: 24px;
`;

export const TitleBottomScroll = styled.Text`
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.RED_700};
    text-align: center;
`;

export const ContainerType = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100%;
    height: 100%;
    `;

export const ContainerEvent = styled.View`
    margin-top: 24px;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
    padding: 8px 16px;
    border-radius: 8px;
`;

export const ContainerEventText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
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

export const Footer = styled.View`
    margin-top: 24px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.RED_700};
`;

export const FooterText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
`;