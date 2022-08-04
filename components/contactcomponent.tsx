import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as React from 'react';

type contactProps = {
  name: string;
  pno: number;
};

const ContactComponent = ({name, pno}: contactProps, navigation: any) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Onclick', {name: name, pno: pno});
      }}>
      <View style={styles.textContainer}>
        <Text style={styles.HeadingText}>{name}</Text>
        {/* <Text style={styles.SubText}>{pno}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: 'aqua',
    justifyContent:'center',
    marginBottom:2,
    borderRadius: 50,
    width:500,
    height:100,
    marginLeft:500,
    //marginRight:100,
  },
  HeadingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  SubText: {
    color: 'black',
    fontSize: 15,
  },
});

export default ContactComponent;