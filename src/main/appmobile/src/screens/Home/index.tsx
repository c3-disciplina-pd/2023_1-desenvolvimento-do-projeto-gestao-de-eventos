import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, Platform, StyleSheet } from "react-native";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  illustration: string;
};

const ENTRIES1: CarouselItem[] = [
  {
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    illustration: "https://i.imgur.com/2nCt3Sbl.jpg",
  },
];

const { width: screenWidth } = Dimensions.get("window");

function carouselCardItem({
  item,
  index,
}: {
  item: CarouselItem;
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

function cardItem({ item, index }: { item: CarouselItem; index: number }) {
  return (
    <S.CarouselCardItem>
      <S.CarouselCardItemImage
        source={{ uri: item.illustration }}
        resizeMode="cover"
      />
    </S.CarouselCardItem>
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
          renderItem={cardItem}
        />
      </S.ContainerBottom>
    </S.Container>
  );
}