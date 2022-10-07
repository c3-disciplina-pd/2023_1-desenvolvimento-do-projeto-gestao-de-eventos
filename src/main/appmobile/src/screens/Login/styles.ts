import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_600};
`;