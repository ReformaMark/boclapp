import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen/index'
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import { colors, fonts } from '../global/styles';

const Stack = createStackNavigator();

export default function AuthStack() {
    return (
      <NavigationContainer >
        <Stack.Navigator >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Boclapp',
            headerStyle: {
              backgroundColor: colors.mainColor,              
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            
            },
         }} 
        />
        <Stack.Screen  
          name="SignIn" 
          component={SignInScreen} 
          options={{ 
            title: 'Sign In',
            headerStyle: {
              backgroundColor: colors.mainColor,              
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
        <Stack.Screen  
        name="SignUp" 
        component={SignUpScreen} 
        options={{ 
          title: 'Sign Up',
          headerStyle: {
            backgroundColor: colors.mainColor,              
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          }, 
        }} 
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    header: {
      color: colors.mainColor,
      
    }
  })