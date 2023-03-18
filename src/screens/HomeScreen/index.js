import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
import { Button } from 'react-native-elements';
import { useForm } from 'react-hook-form'
import useFetchBooks from '../../hooks/useFetchBooks'
import CustomInput from '../../components/CustomInput';
import { useAuthentication } from '../../hooks/useAuthentication';
import Carousel from '../../components/Carousel/Carousel';


export default function HomeScreen({ navigation }) {
  const [books, setBooks ] = useState([]);
  const [loading, setLoading] = useState(false);
  const {control, handleSubmit} = useForm();
  const { user } = useAuthentication()

  const handleSearch = (data) => {
    setLoading(true);
    useFetchBooks(data.query)
      .then(response => {
        setBooks(response?.items || []);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.userInfo}>
          <Text>Hi, {user.displayName}!</Text>
          <Image 
            source={user.photoURL ? { uri: user.photoURL } : require('../../../assets/Boclapp.png')}
            style={styles.profile}
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
          </View>
        </>
      )}
      <Text > Find your best book</Text>
      <CustomInput 
        name="query"     
        iconName='search'       
        placeholder="Search Books title, author"
        control={control}
        defaulValue=''
        style={styles.search}
     
      />
      <Button 
        title='Search'
        onPress={handleSubmit(handleSearch)}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        books.length > 0 && <Carousel data={books}/>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttons: {
    marginTop: 20,
  },
  button: {
    marginBottom: 10,
  },
  profile: {
    width: 60, 
    height: 60, 
    resizeMode: 'contain', 
    borderRadius: 50,
    borderColor: 'black',
  },
  
});