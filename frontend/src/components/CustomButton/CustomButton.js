import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
  iconName,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <View style={styles.content}>
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={fgColor}
            style={[styles.icon, {marginRight: 10}]}
          />
        )}
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
          ]}>
          {text}
        </Text>
      </View>
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

  container_SECONDARY: {
    borderColor: '#003153',
    borderWidth: 2,
  },

  container_TERTIARY: {},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
  },

  text_SECONDARY: {
    color: '#003153',
  },

  text_TERTIARY: {
    color: '#003153',
  },

  icon: {
    marginRight: 10,
  },
});

export default CustomButton;
