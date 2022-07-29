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
  return (
    // <View style={{ flex: 1 }}>
    //   <FlatList
    //     data={people}
    //     renderItem={({item})=> (
    //       <Text>item.name</Text>
    //     )}
    //   />
    // </View>
    <Text>Displaying Contact List</Text>
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
    height: 100,
    width: 200,
    marginBottom: 10,
  },
  textStyle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontWeight: 'Bold',
    backgroundColor: 'grey',
    borderBottomWidth: 8,
    borderBottomColor: 'white',
  },
});