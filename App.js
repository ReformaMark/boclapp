import React from 'react';
import { StyleSheet} from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import './config/firebaseConfig';
import RootNavigation from './src/navigation';

export default function App() {
  return (
    
    <ThemeProvider>

      <RootNavigation />
      
    </ThemeProvider>
    
    
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
