import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';


const window = Dimensions.get('window');

const HomeScreen = (props) => {
  return (
    <View>

       <View style={{height: window.height - 300}}>
          <HomeMap></HomeMap>
      </View>

      {/* CovidMessage */}
      <CovidMessage></CovidMessage>

      {/* Botton Comp */}
      <HomeSearch></HomeSearch>

    </View>
  )
}

export default HomeScreen;