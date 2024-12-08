import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password', '');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('SignIn');
  };
  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  return (
    
  <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput
      name="username"
      control={control}
      placeholder="Username"
      rules={{required: 'Username is required'}}
      
      />
      <CustomInput 
      name="Email"
      control={control}
      placeholder="Email"
      rules={{pattern: {value: EMAIL_REGEX, message: 'Invalid email address'}, required: 'Email is required'}} 
  
      />
      <CustomInput
      name="password"
      control={control} 
      placeholder="Password"
      rules={{required: 'Password is required', minLength: {value: 6, message: 'Password must have at least 6 characters'}}}  
      secureTextEntry={true}
      />
      <CustomInput
      name="passwordConfirm"
      control={control}
      placeholder="Confirm Password"
      rules={{
        validate: value => 
          value == pwd || 'Passwords do not match'
      }}
      secureTextEntry={true}
      />

      <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
        <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
      </Text>

      <SocialSignInButtons />

      <CustomButton
        text="Already have an account? Sign in"
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

export default SignUpScreen;
