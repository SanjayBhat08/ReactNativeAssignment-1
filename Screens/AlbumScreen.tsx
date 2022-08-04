import { CardAnimationContext } from "@react-navigation/stack";
import React from "react";
import { View, SafeAreaView, Image, Text, FlatList} from "react-native";
import { StyleSheet } from "react-native";
import AlbumComponent from "../components/albumcomponent";
import HorizontalDivider from "../components/Horizontaldivider";
// import {train} from '../assets/images.jpg';

const DATA = [
  {
    img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1883&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    img: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
  },
];

function AlbumScreen({navigation}: any) {
  return (
    <FlatList
      data={[...DATA, ...DATA, ...DATA, ...DATA, ...DATA]}
      renderItem={({item}) => {
        return AlbumComponent(item, navigation);
      }}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={HorizontalDivider}
    />
  );
}

export default AlbumScreen;