import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({
  control, 
  name, 
  rules = {}, 
  placeholder, 
  secureTextEntry
}) => {
  return (
       <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
        <View 
        style={[
          styles.container, 
          {borderColor: error ? 'red' : '#B0B0B0'}
          ]}>
        <TextInput value={value} 
        onChangeText={onChange} 
        onBlur={onBlur} 
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry} 
        />
        </View>
        {error && (
        <Text style={{color: 'red', alignSelf: 'Stretch'}}>{error.message || 'Error'}</Text>
        )}
        </>
      )}
      />
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
