import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.warn(data);
    navigation.navigate('SignIn');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="code"
          control={control}
          placeholder="Code"
          rules={{
            required: 'Code is required *',
          }}
          iconName="shield"
        />
        <CustomInput
          name="Password"
          control={control}
          placeholder="Enter new password"
          secureTextEntry={true}
          rules={{
            required: 'Password is required *',
            minLength: {
              value: 6,
              message: 'Password must have at least 6 characters',
            },
          }}
          iconName="lock" 
        />

        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  root: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default NewPasswordScreen;
