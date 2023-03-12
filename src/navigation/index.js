import React from "react";
import { useAuthentication } from '../hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';
import { ScrollView, View } from 'react-native';

export default function RootNavigation() {
    const { user } = useAuthentication();
  
    return (
      <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                {user ? <UserStack /> : <AuthStack />}
            </ScrollView>
      </View>
      )
  }