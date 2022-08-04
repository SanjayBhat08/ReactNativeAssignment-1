import React from "react";
import { View,SafeAreaView, FlatList, Text } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import ContactComponent from "../components/contactcomponent";
import HorizontalDivider from "../components/Horizontaldivider";


    const DATA = [
      {name: 'Shaun',pno: 1234567890,},
      {name: 'Jack',pno: 4530023264,},
      {name: 'Alex', pno: 1478523698,},
      {name: 'Jane', pno: 987563210,},
      {name: 'Roy',  pno: 125478963,},
      {name: 'Steve', pno: 357951481,},
    ];

    function ContactsScreen({navigation}:any) {
    return (
        <FlatList
          data={[...DATA, ...DATA, ...DATA]}
          renderItem={({ item }) => {
           return ContactComponent(item, navigation);
          }}
          keyExtractor = {(item,index) => index.toString()}
          ItemSeparatorComponent = {HorizontalDivider}
        />
    );
  }


export default ContactsScreen;