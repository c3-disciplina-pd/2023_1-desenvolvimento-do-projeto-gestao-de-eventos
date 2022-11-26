import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    `;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 70px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.COLORS.RED_700};
`;

export const Form = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;