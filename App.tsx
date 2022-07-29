import * as React from 'react';
import { useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// function ChatScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Chats</Text>
//     </View>
//   );
// }

// const [people, setPeople] = useState([
//   {name: 'Shaun', key: '1'},
//   {name: 'Shaun', key: '2'},
//   {name: 'Shaun', key: '3'},
//   {name: 'Shaun', key: '4'},
//   {name: 'Shaun', key: '5'},
//   {name: 'Shaun', key: '6'},
// ]);

function AlbumScreen() {
  return (
    <View>
      <Text style={styles.textStyle}>PHOTOS</Text>
      <Image style={styles.imagestyle}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image style={styles.imagestyle}
        source={{
          uri: 'https://reactjs.org/logo-og.png',
        }}
      />
      <Image style={styles.imagestyle}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
    </View>
  );
}

function ContactsScreen() {
  const [people, setPeople] = useState([
    {name: 'Shaun',number: '1234567890', key: '1'},
    {name: 'Jack',number: '1234567890', key: '2'},
    {name: 'Alex', number: '1234567890', key: '3'},
    {name: 'Alex', number: '1234567890',  key: '3'},
    {name: 'Alex', number: '1234567890', key: '3'},
    {name: 'Jane', number: '1234567890', key: '4'},
    {name: 'Roy',  number: '1234567890', key: '5'},
    {name: 'Steve', number: '1234567890', key: '6'},
  ]);
  return (
    <><View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.listitem}>{item.name}   {item.number}</Text>
        )} />
    </View></>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Chat" component={ChatScreen} /> */}
        <Tab.Screen name="Albums" component={AlbumScreen} />
        <Tab.Screen name="Contacts" component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imagestyle: {
    resizeMode: "contain",
    height: 120,
    width: 200,
    marginBottom: 10,
  },
  textStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'Bold',
    backgroundColor: 'red',
    borderBottomWidth: 8,
    borderBottomColor: 'white',
  },
  listitem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    padding: 20,
    backgroundColor: 'grey',
    fontSize: 20,
    marginHorizontal: 5,
    marginBottom: 10,
  },
});