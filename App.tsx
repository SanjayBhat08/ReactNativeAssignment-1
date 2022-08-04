import * as React from 'react';
import { useState } from 'react';
import { Text, View, FlatList, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ChatScreen from './Screens/ChatScreen';
// import AlbumScreen from './Screens/AlbumScreen';
// import ContactsScreen from './Screens/ContactScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Homepage';
import Onclick from './Screens/Onclickpage';

//const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Tab.Screen name="Chat" component={ChatScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Onclick" component={Onclick} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


