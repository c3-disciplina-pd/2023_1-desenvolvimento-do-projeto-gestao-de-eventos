import * as S from "./styles";

import { FlatList, ScrollView } from "react-native";

export function EventDetails() {
    return (
        <S.Container>
        <S.ContainerTop>
            <S.TitleTop>Banner do Evento</S.TitleTop>
        </S.ContainerTop>
        <S.ContainerBottom>
            <S.TitleBottom>Título do Evento</S.TitleBottom>
            <ScrollView showsVerticalScrollIndicator={false}>
            <S.ContainerEvent>
                <S.ContainerEventText>
                    13 a 15 de setembro de 2021 de 13:00 às 20:00.
                    Laboratório Loyola, Primeiro Andar, Bloco G.
                </S.ContainerEventText>
            </S.ContainerEvent>
                <S.TitleBottomScroll>Descrição</S.TitleBottomScroll>
                <S.ContainerEvent>
                <S.ContainerEventText>
                A descrição é uma tipologia textual usada para retratar personagens, espaços, momentos, pensamentos etc.
                Em suma, tudo que é nomeado pode ser descrito. A classe gramatical mais usada para essa função é o 
                adjetivo. Não obstante, existem diversas outras formas de produzir essa tipologia, assim como há 
                vários tipos de descrição. Além disso, os trechos descritivos são fundamentais em diversos gêneros
                 textuais, tais como: os contos, as crônicas, as notícias, entre outros. Por isso, é fundamental saber 
                como fazer uma boa descrição para compor bons textos.
                </S.ContainerEventText>
                </S.ContainerEvent>
                <S.TitleBottomScroll>Detalhes da Localização</S.TitleBottomScroll>
                <S.ContainerEvent>
                <S.ContainerEventText>
                    Pro Magno 
                    Centro de eventos
                    Perto da padaria
                    Nº: 55
                </S.ContainerEventText>
                <S.Button>
                    <S.TextButton>Ver no mapa</S.TextButton>
                </S.Button>
                </S.ContainerEvent>
            <S.Button>
                    <S.TextButton>Inscreva-se</S.TextButton>
            </S.Button>
            </ScrollView>
        </S.ContainerBottom>
        </S.Container>
    );
}