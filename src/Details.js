import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { deviceHeight, deviceWidth } from './Dimensions';
import Icon from 'react-native-vector-icons/Ionicons'
import { API_KEY } from './Constants';

const Details = (props) => {
    const [data, setData] = useState();
    const {name} = props.route.params;

    useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
      )
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log(err));
    }, []);

    const Data =({title, value})=> (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 22, color: 'gray'}}>{title} </Text>
          <Text style={{fontSize: 22, color: 'white'}}>
            {value}
          </Text>
        </View>
    );
    
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/image1.jpg')}
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
        {data ? (
          <View style={styles.cityName}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{name}</Text>
              <Text style={{color: 'white', fontSize: 22, textAlign:'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>
            <Text style={{color: 'white', fontSize: 64}}>
              {(data['main']['temp'] - 273).toFixed(2)}&deg; C
            </Text>
            <View>
                <Text style={{color: 'white', fontSize: 22, marginBottom:16}}>Weather Details</Text>
                <View style={{width: deviceWidth - 60}}>
                    <Data value={data['wind']['speed']} title="wind" />
                    <Data value={data['main']['pressure']} title="Pressure" />
                    <Data value={`${data['main']['humidity']}%`} title="Humidity" />
                    <Data value={data['visibility']} title="Visibility" />
                </View>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default Details

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
      cityName:{
        flexDirection: 'column',
        justifyContent:'space-between',
        alignItems:'center',
        height: deviceHeight-100
      }
})