import React from "react";
import { View, Image, Text} from "react-native";
import { StyleSheet } from "react-native";

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

  const styles = StyleSheet.create({
    imagestyle: {
        resizeMode: "contain",
        height: 120,
        width: 200,
        marginBottom: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        marginLeft:'25%',
        marginRight:'25%',
      },
      textStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 'Bold',
        backgroundColor: 'yellow',
        borderBottomWidth: 8,
        borderBottomColor: 'white',
      },
  });

  export default AlbumScreen;