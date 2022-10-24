import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { Dimensions, Platform, StyleSheet } from "react-native";
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  title: string;
  subtitle: string;
  illustration: string;
};

const ENTRIES1: CarouselItem[] = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/UYiroysl.jpg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/UPrs1EWl.jpg",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/MABUbpDl.jpg",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/KZsmUi2l.jpg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
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
      <ParallaxImage
        source={{ uri: item.illustration }}
        containerStyle={styles.imageContainer}
        style={styles.image}
        parallaxFactor={0.4}
        showSpinner
        spinnerColor="rgba(0, 0, 0, 0.25)"
      />
      <S.CarouselCardItemTitle numberOfLines={2}>
        {item.title}
      </S.CarouselCardItemTitle>
      <S.CarouselCardItemSubtitle numberOfLines={2}>
        {item.subtitle}
      </S.CarouselCardItemSubtitle>
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
      <S.ContainerBottom></S.ContainerBottom>
    </S.Container>
  );
}

const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});
