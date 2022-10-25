import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, Platform, StyleSheet } from "react-native";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

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

const { width: screenWidth } = Dimensions.get("window");

function carouselCardItem({
  item,
  index,
}: {
  item: EventItem;
  index: number;
}) {
  return (
    <S.CarouselCardItem>
      <S.CarouselCardItemImage
        source={{ uri: item.illustration }}
        resizeMode="cover"
      />
    </S.CarouselCardItem>
  );
}

function cardItem({ item, index }: { item: EventItem; index: number }) {
  function handleAcessEvent() {
    alert("Acessar evento");
  }
  return (
    <S.CardItem
      onPress={handleAcessEvent}
    >
      <S.CardItemImage
        source={{ uri: item.illustration }}
        resizeMode="cover"
      />
      <S.CardItemTextContainer>
        <S.CardItemTitle numberOfLines={2}>{item.title}</S.CardItemTitle>
        <S.CardItemSubtitle numberOfLines={2}>{item.subtitle}</S.CardItemSubtitle>
      </S.CardItemTextContainer>
    </S.CardItem>
  );
}

export function Home() {
  const [entries, setEntries] = useState([]) as any;
  const carouselRef = useRef(null) as any;

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  return (
    <S.Container>
      <S.ContainerTop>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={carouselCardItem}
          hasParallaxImages={true}
        />
      </S.ContainerTop>
      <S.ContainerBottom>
        <S.FlatListTitle>Adicionados rescentemente</S.FlatListTitle>
        <S.FlatList
          data={entries}
          keyExtractor={(item: EventItem) => item.id}
          renderItem={cardItem}
          showsVerticalScrollIndicator={false}
        />
      </S.ContainerBottom>
    </S.Container>
  );
}