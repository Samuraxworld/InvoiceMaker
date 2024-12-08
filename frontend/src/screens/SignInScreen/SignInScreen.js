import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput
} from 'react-native';
import Logo from '../../../assets/images/Logo.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';


const SignInScreen = () => {
  
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control, 
    handleSubmit, 
    formState: {errors},
} = useForm();


  const onSignInPressed = (data) => {
    console.log(data);
    // validate username and password

    navigation.navigate('HomeScreen');
  };
  const onForgotPaswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
         <CustomInput
         name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
        name="password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{required: 'Password is required', minLength: {value: 6, message: 'Password should be at least 6 characters'}}}
        />


        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPaswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
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
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    marginTop: 50,
  },
});

export default SignInScreen;
