import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButtons from '../../components/SocialSignButtons'
import { EMAIL_REGEX } from '../../components/Regex/Regex'
import {useForm} from 'react-hook-form'
import { addUser } from '../../data/services/AuthService';





const SignUpScreen = () => {

  const navigation = useNavigation();
  const {control, handleSubmit, formState: {errors}, watch} = useForm();
  const password = watch('password')
  const {error, setError } = useState('');

const onRegisterPressed = async (data) => {
  console.log(data);
  try {
    await addUser(data);
    console.log('User added successfully');
    navigation.navigate('SignIn');
  } catch (err) {
    if(err.code === 'auth/email-already-in-use'){
      console.log('Registration failed: Email already in use')
    } else{
      console.log(err.message)
    }
  }
};
   
  
  const onSignInPressed =  () =>{
    navigation.navigate('SignIn')
  };

  const onTermsOfUsePressed =  () =>{
    console.warn("You pressed the onTermsOfUsePressed")
  };

  const onPrivacyPressed =  () =>{
    console.warn("You pressed the onTermsOfUsePressed")
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
    
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name='username'
          control={control}
          type="feather" 
          iconName="user"
          placeholder="Username" 
          rules={{
            required: "Username is required", 
            minLength: {value: 6, message: "Username should be minimum of 6 characters long."}}}
        />
        <CustomInput     
          name='email'
          control={control}    
          iconName="email"        
          placeholder="Email"
          rules={{
            required:"Email is required" ,
            pattern:{value:EMAIL_REGEX , message: 'Email is invalid'}}}
        />
        <CustomInput 
          name='password'
          control={control}
          type="feather" 
          iconName="lock"          
          placeholder="Password"
          secureTextEntry={true} 
          rules={{required: "Password is required", minLength: {value: 6, message: "Password should be minimum of 6 characters long."}}}
        />
        <CustomInput 
          name='confirmPassword'
          control={control}
          type='material-community'
          iconName="form-textbox-password"      
          placeholder="Confirm password"
          secureTextEntry={true} 
          rules={{validate: value => value === password || 'Password does not match',required: "Confirm password is required", minLength: {value: 6, message: "Confirm password should be minimum of 6 characters long."}}}
          
        />
        <Text>{error}</Text>
        <CustomButton 
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}       
        />
        <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text></Text>
        <SocialSignButtons />
        <CustomButton 
          text="Have an account? Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  )
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#051C60',
    marginVertical: '5%',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'

  }
})
export default SignUpScreen

