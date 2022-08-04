import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Onclick = ({route}:any) => {
    const {name= '', pno, img=''} = route.params;
    return (
        <View style={styles.style1}>
            {name && (
                <>
                  <Text style={styles.HeadingText}>{name}</Text>
                  <Text style={styles.SubText}>{pno}</Text>
                </>
            )}
            {img && <Image style={styles.imagestyle} source={img}/>}
        </View>
    );
};

const styles=StyleSheet.create({
    style1: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
    },
    HeadingText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 32,
    },
    SubText: {
        color: 'grey',
        fontSize: 28,
    },
    imagestyle: {
        width: '100%',
        height: 500,
        resizeMode: 'center',
    },
});

export default Onclick;