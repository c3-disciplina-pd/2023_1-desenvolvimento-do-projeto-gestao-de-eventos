import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
    align-items: center;
    justify-content: center;
    padding: 24px;
`;

export const Logo = styled.Image`
    width: 50%;
    height: 50%;
`;