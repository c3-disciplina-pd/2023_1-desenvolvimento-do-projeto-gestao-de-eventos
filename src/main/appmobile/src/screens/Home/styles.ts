import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
`;

export const ContainerTop = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
    align-items: center;
    justify-content: center;
    padding: 64px 24px 24px 24px;
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

export const CarouselCardItem = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
    padding: 16px;
    justify-content: space-between;
`;

export const CarouselCardItemTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `};
`;

export const CarouselCardItemSubtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_500};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `};
`;

// export const CarouselCardItemContainer = styled.View`
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-between;
// `;

// export const CarouselCardItemImage = styled.Image`
//     width: 64px;
//     height: 64px;
// `;