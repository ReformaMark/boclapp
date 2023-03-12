import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

const{ width } = Dimensions.get('window')

const Carousel = (props) => {

  const renderItem = ({ item }) => (
    <View style={styles.bookContainer}>
        <Image style={styles.bookImage} source={{ uri: item.volumeInfo.imageLinks?.thumbnail }} />
        <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
      </View>
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width - 60}
      snapToAlignment='center'
      contentContainerStyle={styles.contentContainer}
    />
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      paddingVertical: 20,
    },
    bookContainer: {
      width: width - 60,
      marginHorizontal: 30,
      alignItems: 'center',
    },
    bookImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover',
      borderRadius: 10,
    },
    bookTitle: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default Carousel;
