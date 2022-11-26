import { Dimensions } from "react-native";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

type EventItem = {
  id: string;
  illustration: string;
  title: string;
  subtitle: string;
};

const ENTRIES1: EventItem[] = [
  {
    id: "1",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
    title: "Title 1",
    subtitle: "Subtitle 1",
  },
  {
    id: "2",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
    title: "Title 2",
    subtitle: "Subtitle 2",
  },
  {
    id: "3",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
    title: "Title 3",
    subtitle: "Subtitle 3",
  },
  {
    id: "4",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
    title: "Title 4",
    subtitle: "Subtitle 4",
  },
  {
    id: "5",
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
    title: "Title 5",
    subtitle: "Subtitle 5",
  },
];

function cardItem({ item, index }: { item: EventItem; index: number }) {
  
  function handleAcessEvent() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    navigation.navigate("EventDetails");
  }

  return (
    <S.CardItem onPress={handleAcessEvent}>
      <S.CardItemImage source={{ uri: item.illustration }} resizeMode="cover" />
      <S.CardItemTextContainer>
        <S.CardItemTitle numberOfLines={2}>{item.title}</S.CardItemTitle>
        <S.CardItemSubtitle numberOfLines={2}>
          {item.subtitle}
        </S.CardItemSubtitle>
      </S.CardItemTextContainer>
    </S.CardItem>
  );
}

export function Home() {
  const [entries, setEntries] = useState([]) as any;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setEntries(ENTRIES1);
    setLoading(false);
  }, [entries]);

  return (
    <S.Container>
      <S.ContainerTop>
        <S.BannerTop
          source={{ uri: "https://i.imgur.com/UYiroysl.jpg" }}
          resizeMode="cover"
        />
      </S.ContainerTop>
      <S.ContainerBottom>
        <S.FlatListTitle>Adicionados rescentemente</S.FlatListTitle>
        <S.FlatList
          data={entries}
          renderItem={cardItem}
          keyExtractor={(item: any) => String(item.id)}
          showsVerticalScrollIndicator={false}
        />
      </S.ContainerBottom>
    </S.Container>
  );
}
