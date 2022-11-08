import styled, { css } from 'styled-components/native';

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