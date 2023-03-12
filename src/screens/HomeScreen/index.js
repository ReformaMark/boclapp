import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../../hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../../../config/firebaseConfig'
import { useForm } from 'react-hook-form'
import useFetchBooks from '../../hooks/useFetchBooks'
import CustomInput from '../../components/CustomInput';

export default function HomeScreen({ navigation }) {
  const [books, setBooks ] = useState([]);
  const {control, handleSubmit, formState: {errors}} = useForm();
  const { user } = useAuthentication();
  const auth = getAuth(app);

  const handleSignOut = () => {
    if (user) {
      signOut(auth)
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  const handleSearch = (data) => {
    console.log(data.query)
    useFetchBooks(data.query)
      .then(response => {
        setBooks(response?.items || []);
        console.log(response)
      });
  };



  return (
    <View style={styles.container}>
      <CustomInput 
        name="query"     
        iconName='search'       
        placeholder="Search Books"
        control={control}
        defaulValue=''
      />
      <Button 
        title='Search'
        onPress={handleSubmit(handleSearch)}
      />
      {books.map(book => (
        <View key={book.id}>
          <Text>{book.volumeInfo.title}</Text>
          
        </View>
      ))}
      {user ? (
        <View style={styles.userInfo}>
          <Text>Welcome back, {user.displayName}!</Text>
            <Button 
              title="Sign out" 
              onPress={handleSignOut} 
            />
        </View>
      ) : (
        <>
          
          <View style={styles.buttons}>
            <Button
              title="Sign In"
              buttonStyle={styles.button}
              onPress={() => navigation.navigate('SignIn')}
            />
            <Button
              title="Sign Up"
              type="outline"
              buttonStyle={styles.button}
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
  },
});