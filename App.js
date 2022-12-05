
import { View, Text, StatusBar, ScrollView, 
  PermissionsAndroid, Platform
 } from 'react-native'
import React, { useEffect } from 'react'


import Geolocation from '@react-native-community/geolocation';
// import Root from './src/navigation/Root';
// import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigation/RootNavigator';
// import HomeScreen from './src/screens/HomeScreen';






navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {


const androidPermission = async ()=>{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Uber App Camera Permission",
        message:
          "Uber App needs access to your location " +
          "so you can take awesome rides.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

  useEffect(() => {
      if (Platform.OS ==='android'){
        androidPermission();
      } else {
        //resquest
        Geolocation.requestAuthorization();
      }
  }, [])


  return (
    <>
    
    {/* <ScrollView> */}
    <StatusBar barStyle='dark-content'/>

   
     {/* <Root/> */}
     
    {/* <HomeScreen/> */}
     <RootNavigator/>
     
    {/* </ScrollView> */}

    </>
  )

}

export default App;