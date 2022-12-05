import { View, Text, TextInput, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';

import styles from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow';
import { useNavigation } from '@react-navigation/native';


const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};


const DestinationSearch = (props) => {

    // const [fromText, setFromText] = useState('');
    // const [destinationText, setDestinationText] = useState('');

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    const navigation = useNavigation();

    const checkNavigation =()=>{
      // console.warn('checkNavigation is called');
      if (originPlace && destinationPlace){
        // console.warn('Redirect to results');
        navigation.navigate('SearchResults', {
          originPlace,
          destinationPlace,
        });
      }
    }

    useEffect(()=>{
      checkNavigation();
    },[originPlace, destinationPlace])

  return (
    <SafeAreaView>
      {/* <ScrollView> */}
    <View style= {styles.container}>

        {/* <TextInput 
        value={fromText}
        onChangeText={setFromText}
        style={styles.textInput} 
        placeholder='From'>
        </TextInput>

        <TextInput 
        value={destinationText}
        onChangeText={setDestinationText}
        style={styles.textInput} 
        placeholder='Where to?'>
        </TextInput> */}

      <GooglePlacesAutocomplete
        placeholder='Where from?'
        onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setOriginPlace({data, details});
        // console.log(data, details);
      }}

      enablePoweredByContainer={false}
      suppressDefaultStyles
      
      currentLocation={true}
      currentLocationLabel='Current location'

      styles={{
        textInput: styles.textInput,
        container: styles.autoCompleteContainer,
        listView: styles.listView,
        separator: styles.separator,
      }}

      fetchDetails
      query={{
        key: 'AIzaSyCMdRgIYtGZOPAON3HB-M4lEOjiNZn2w9U',
        language: 'en',
      }}

      renderRow={(data)=> <PlaceRow data={data}/>}
      renderDescription= {(data) => data.description || data.vicinity}
      predefinedPlaces= {[homePlace, workPlace]}
    />

        <GooglePlacesAutocomplete
      placeholder='Where to?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setDestinationPlace({data, details});
        // console.log(data, details);
      }}

      enablePoweredByContainer={false}
      suppressDefaultStyles
      styles={{
        textInput: styles.textInput,
        container: {
          ...styles.autoCompleteContainer,
          top: 55,
        },
        separator: styles.separator,
      }}
      fetchDetails
      query={{
        key: 'AIzaSyCMdRgIYtGZOPAON3HB-M4lEOjiNZn2w9U',
        language: 'en',
      }}

      renderRow={(data)=> <PlaceRow data={data}/>}
    />

      {/* Circle near Origin input */}
      <View style={styles.circle}></View>

       {/* Line between dots */}
       <View style={styles.line}></View>

       {/* Square near Destination input */}
       <View style={styles.square}></View>


    </View>
    {/* </ScrollView> */}
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         // backgroundColor:'#eee',
//         height:'100%'
//     },
//     textInput: {
//         padding: 10,
//         backgroundColor: '#eee',
//         marginVertical: 5,
//     }
// });

export default DestinationSearch;