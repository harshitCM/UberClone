import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import SearchResults from '../screens/SearchResults';
import { NavigationContainer } from '@react-navigation/native'

import DestinationSearch from '../screens/DestinationSearch';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (

    // <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown: false,
     }}
    >
      {/* <Stack.Screen name = {"HomeScreen"} component={HomeScreen}/>
      <Stack.Screen name = {"DestinationSearch"} component={DestinationSearch}/>
      <Stack.Screen name = {"SearchResults"} component={SearchResults}/> */}


      <Stack.Screen name = "HomeScreen" component={HomeScreen}/>
      <Stack.Screen name = "DestinationSearch" component={DestinationSearch}/>
      <Stack.Screen name = "SearchResults" component={SearchResults}/>
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default HomeNavigator;