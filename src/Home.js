import { FlatList, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { deviceHeight, deviceWidth } from './Dimensions'
import Cards from './Cards'

const Home = (props) => {
  const [city, setCity] =useState('');

  const cities = [
    {
      name: 'New Delhi',
      image: require('../assets/images/image3.jpg'),
    },
    {
      name: 'Nagpur',
      image: require('../assets/images/image4.jpg'),
    },
    {
      name: 'Pune',
      image: require('../assets/images/image5.jpg'),
    },
    {
      name: 'Mumbai',
      image: require('../assets/images/image6.jpg'),
    },
    {
      name: 'Bhandara',
      image: require('../assets/images/image7.jpg'),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image2.jpg')}
        style={styles.imageStyle}
      />
      <View style={{position: 'absolute', paddingHorizontal: 10}}>
        <View style={styles.headerContainer}>
          <Icon name="menu" size={46} color="white" />
          <Image
            source={require('../assets/images/user.jpg')}
            style={styles.userImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 40, color: 'white'}}>Hello Dipanshu</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'white'}}>
            Search the city name
          </Text>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 16,
              paddingHorizontal: 10,
              borderColor: 'white',
            }}>
            <TextInput
              value={city}
              onChangeText={val => setCity(val)}
              placeholder="Search City"
              placeholderTextColor={'white'}
              color={'white'}
              fontSize={16}
            />
            <TouchableOpacity onPress={() => props.navigation.navigate('Details',{name:city})}>
              <Icon name="search" size={22} color={'white'} />
            </TouchableOpacity>
          </View>
          <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop:220, marginBottom:20}}>
            My Locations
          </Text>
          <FlatList
          horizontal
            data={cities}
            renderItem={({item}) => (             
              <Cards name={item.name} image={item.image} navigation={props.navigation}/>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  imageStyle: {
    opacity: 0.6,
    backgroundColor: 'black',
    height:deviceHeight,
    width:deviceWidth
  },
  userImage:{
    height:46,
    width:46,
    borderRadius:23
  },
  headerContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    width:deviceWidth -25
  },
  textContainer:{
    paddingHorizontal:10,
    marginTop:50
  }
});