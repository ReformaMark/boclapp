import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../global/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/index'
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import { fonts } from '../global/styles';
import {FontAwesome} from 'react-native-vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
export default function UserStack(){
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    title: 'Boclapp',
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                    ),
                    headerTintColor: colors.charcoal,
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: fonts.poppinsRegular,
                    },
                }} 
                />
                <Tab.Screen 
                name="SignIn" 
                component={SignInScreen} 
                options={{ 
                    title: 'Boclapp',
                    tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="home" color={color} size={size} />
                    ),
                    headerTintColor: colors.charcoal,
                    headerTitleStyle: {
                    fontWeight: 'bold',
                    fontFamily: fonts.poppinsRegular,
                    },
                }} 
                />
               
            </Tab.Navigator>
        </NavigationContainer>
    );
}
