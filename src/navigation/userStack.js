import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen/index'
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { colors } from '../global/styles';

const Drawer = createDrawerNavigator();

export default function UserStack(){

   
    return (
        <NavigationContainer>
            <Drawer.Navigator
            drawerContentOptions={{
                activeTintColor: '#e91e63',
                itemStyle: { marginVertical: 5 },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerStyle: {
                  backgroundColor: colors.mainColor,
                },
                headerTintColor: colors.white,
            }}>
                <Drawer.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ 
                    title: 'Boclapp',                    
                }} 
                />
                <Drawer.Screen 
                name="SignIn" 
                component={SignInScreen} 
                options={{ 
                    title: 'Boclapp',
                }}/>
                
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
