// import { View, Text } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from '../screens/HomeScreen';
// import DestinationSearch from '../screens/DestinationSearch';
// import SearchResults from '../screens/SearchResults';
// import { NavigationContainer } from '@react-navigation/native';

// const Stack = createNativeStackNavigator();

// const RootNavigator = () => {
//   return (

//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name = {"Home"} component={HomeScreen}/>
//       <Stack.Screen name = {"DestinationSearch"} component={DestinationSearch}/>
//       <Stack.Screen name = {"SearchResults"} component={SearchResults}/>
//     </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default RootNavigator;

import { View, Text } from 'react-native'
import React from 'react'

import HomeNavigator from './HomeNavigator'
import CustomDrawer from './CustomDrawer'

import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DummyScreen = (props) =>(
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>{props.name}</Text>
  </View>
)

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={
        (props) => (
          <CustomDrawer {...props}/>
        )
      }>
        <Drawer.Screen name ="Home" component={HomeNavigator} />

      <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name={"Your Trips"}/>}
      </Drawer.Screen>

      <Drawer.Screen name="Help">
      {() =><DummyScreen name={"Help"}/>}
      </Drawer.Screen>

      <Drawer.Screen name="Wallet">
           {() =><DummyScreen name={"Wallet"}/>}
      </Drawer.Screen>

      <Drawer.Screen name="Settings">
      {() =><DummyScreen name={"Settings"}/>}
      </Drawer.Screen>
        
      </Drawer.Navigator>

        {/* <Drawer.Navigator>
          <Drawer.Screen name='HomeScreen' component={HomeScreen} ></Drawer.Screen>
        </Drawer.Navigator> */}

      {/* <HomeNavigator/> */}
    </NavigationContainer>
  )
}

export default RootNavigator