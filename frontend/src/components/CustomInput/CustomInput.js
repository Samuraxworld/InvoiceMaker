import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholderTextColor="gray"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    width: '90%',
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    color: '#000'
  },
});

export default CustomInput;
