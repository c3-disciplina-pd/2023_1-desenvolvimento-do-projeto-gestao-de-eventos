import * as React from 'react';
import * as S from "./styles";

import { Dimensions } from "react-native";
const { width } = Dimensions.get('window');
import { useEffect, useState } from "react";
import { useGetEvents } from "../../configs";
import { imgRoute } from "../../services/api";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import Carousel, { PaginationLight } from 'react-native-x-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Text, Image, StyleSheet, RefreshControl, View } from 'react-native';
import { EventDetails } from '@screens/EventDetails';


export function Home() {

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { data: events, refetch: eventsRefetch } = useGetEvents({});
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
      eventsRefetch();
    }, 100);
  }

  useEffect(() => {
    onRefresh();
  }, [events]);

  useFocusEffect(
    React.useCallback(() => {
      onRefresh();
      return () => {
      };
    }, [])
  );

  const EventDetails = async (name) => {
    try {
      await AsyncStorage.setItem(`name`, JSON.stringify(name));
    } catch (e) {
      console.log(e.message)
    }
    navigation.navigate("EventDetails");
  }

  const renderItem = (events) => (
    <View
      key={events.name}
      style={styles.cardContainer}
    >
      <View style={styles.cardWrapper}>
        <Image 
          resizeMode="stretch"
          style={styles.card}
          source={{ uri: imgRoute + `/public/uploads/icode-${events.imageUrl}` }}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: '#0080ff' },
          ]}>
          <S.CardItemTop onPress={() => EventDetails(events.name)}>
            <Text style={styles.cornerLabelText}>
              ver mais
            </Text>
          </S.CardItemTop >
        </View>
      </View>
    </View >
  );


  function cardItem({ item, index }: { item: events; index: number }) {

    const loadUser = async (name) => {
      try {
        await AsyncStorage.setItem(`name`, JSON.stringify(name));
      } catch (e) {
        console.log(e.message)
      }
    }

    function handleAcessEvent() {
      loadUser(item.name);
      navigation.navigate("EventDetails");
    }
    return (
      <S.CardItem
        onPress={handleAcessEvent}>
        <S.CardItemImage source={{ uri: imgRoute + `/public/uploads/icode-${item.imageUrl}` }} resizeMode="stretch" />
        <S.CardItemTextContainer>
          <S.CardItemTitle numberOfLines={4}>{item.name}</S.CardItemTitle>
          <S.CardItemSubtitle numberOfLines={2}>
            {item.date}
          </S.CardItemSubtitle>
          <S.CardItemSubtitle numberOfLines={2}>
            {item?.price === 'R$0,00' ? "Gratuito" : ` ${item?.price}`}
          </S.CardItemSubtitle>
        </S.CardItemTextContainer>
      </S.CardItem>
    );
  }




  return (
    <S.Container>
      <S.ContainerTop >
        {events?.find((event) => event.isEmphasis === 1) ? (
          <View style={styles.container} >
            <Carousel
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              pagination={PaginationLight}
              renderItem={renderItem}
              data={events?.filter((event) => event.isEmphasis === 1)}
              loop
              autoplay
            />
          </View>
        ) : (
          <Text >
            Não há eventos em destaque no momento
          </Text>
        )}
      </S.ContainerTop>

      <S.ContainerBottom  >
        <S.FlatListTitle>Adicionados rescentemente</S.FlatListTitle>
        <S.FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={events}
          renderItem={cardItem}
          keyExtractor={(item: any) => String(item.name)}
          showsVerticalScrollIndicator={false}
        />
      </S.ContainerBottom>
    </S.Container >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    width: 100,
    height: 30,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center',
  },
});