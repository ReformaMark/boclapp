import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import './config/firebaseConfig';
import RootNavigation from './src/navigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
   
      <RootNavigation />
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
