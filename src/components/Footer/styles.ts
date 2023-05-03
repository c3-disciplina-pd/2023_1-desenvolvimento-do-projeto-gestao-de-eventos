import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 0.04;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.RED_700};
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
