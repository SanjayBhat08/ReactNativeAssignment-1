import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';

type albumProps = {
  img: any;
};

const AlbumComponent = ({img}: albumProps, navigation: any) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        navigation.navigate('Onclick', {img: img});
      }}>
      <Image style={styles.image} source={img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#ffffff',
    resizeMode: 'cover', 
  },
});

export default AlbumComponent;