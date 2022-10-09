import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native'

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const Title = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GREEN_700};
    font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
    color: theme.COLORS.GREEN_700,
    size: 32,
}))``;