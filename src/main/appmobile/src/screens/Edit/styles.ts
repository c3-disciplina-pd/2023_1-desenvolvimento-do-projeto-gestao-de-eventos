import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    `;

export const ContainerTop = styled.View`
    flex: 0.1;
    width: 60%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 64px 24px 24px 24px;
    flex-direction: row;
    `;

export const UserImage = styled.Image`
    width: 80px;
    height: 80px;

`;

export const UserInfo = styled.View`
    width: 100%;
    height: 100%;
    `;

export const UserName = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

export const UserEmail = styled.Text`
    font-size: 16px;
    text-align: center;
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
    color: ${({ theme }) => theme.COLORS.RED_700};
`;
