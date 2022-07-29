import React from "react";
import { View, FlatList, Text } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

function ContactsScreen() {
    const [people, setPeople] = useState([
      {name: 'Shaun',number: '1234567890', key: '1'},
      {name: 'Jack',number: '4530023264', key: '2'},
      {name: 'Alex', number: '1478523698',  key: '3'},
      {name: 'Jane', number: '987563210', key: '4'},
      {name: 'Roy',  number: '125478963', key: '5'},
      {name: 'Steve', number: '357951481', key: '6'},
    ]);
    return (
      <><View>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <Text style={styles.listitem}>{item.name} : {item.number}</Text>
            
          )} />
      </View></>
    );
  }

  const styles = StyleSheet.create({
    listitem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 20,
        marginLeft: '40%',
        marginRight: '40%',
        backgroundColor: 'lightblue',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        marginBottom: 10,
        color: 'red',
        //borderBottomLeftRadius: 10,
        borderRadius: 25,
      },
    });

export default ContactsScreen;