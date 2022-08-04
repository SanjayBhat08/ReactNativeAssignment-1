import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AlbumScreen from "./AlbumScreen";
import ContactsScreen from "./ContactScreen";

const Tab=createMaterialTopTabNavigator();

export default function Home(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Album" component={AlbumScreen}/>
            <Tab.Screen name="Contacts" component={ContactsScreen}/>
        </Tab.Navigator>
    );
}