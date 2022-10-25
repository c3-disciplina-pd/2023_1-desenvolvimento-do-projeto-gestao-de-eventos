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
    justify-content: space-between;
`;

export const CarouselCardItemImage = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

export const FlatListTitle = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 16px;
`;

export const FlatList = styled.FlatList`
    width: 100%;
`;