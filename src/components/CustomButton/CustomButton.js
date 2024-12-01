import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
        ]}>
      <Text style={[
        styles.text, 
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
        ]}>
          {text}
          </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000000',
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },

  container_PRIMARY: {
    backgroundColor: '#003153',
  },

  container_TERTIARY: {},

  text: {
    fontWeight: 'bold',
    color: '#fff',
  },

  text_TERTIARY: {
    color: '#003153',
  },
});

export default CustomButton;
