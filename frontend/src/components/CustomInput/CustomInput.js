import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInput = ({
  control, 
  name, 
  rules, 
  placeholder, 
  secureTextEntry, 
  iconName, 
  iconSize = 25, 
  iconColor = '#808080'
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
              {borderColor: error ? 'red' : '#B0B0B0'},
            ]}>
             <Icon
              name={iconName}
              size={iconSize}
              color={iconColor}
              style={styles.icon}
            /> 
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    width: '90%',
    borderColor: '#B0B0B0',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    alignSelf: 'stretch',
    marginLeft: 20,
  },
});

export default CustomInput;
