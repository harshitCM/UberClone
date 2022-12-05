import { View, Text, Dimensions,} from 'react-native'
import React from 'react'
import UberTypes from '../../components/UberTypes';
import RouteMap from '../../components/RouteMap';

import { useRoute } from '@react-navigation/native';

// const window = Dimensions.get('window');

const SearchResults = (props) => {
  const route = useRoute();
  console.log(route.params);

  //for dynamic route
  const {originPlace, destinationPlace} = route.params

  return (
    <View 
    style= {{display: 'flex', 
    justifyContent: 'space-between'
    }}
    >

      {/* <View style={{height: Dimansions.get('window').height - 400}}> */}
     
     {/* <View style={{height: window.height - 410}}> */}
      <View 
      style={{height: 350}}
      >
      <RouteMap 
      //
      origin={originPlace} 
      destination={destinationPlace}
      />
      </View>
         

      <View 
      style= {{height: 400}}
      >
      <UberTypes/>
      </View>
         
    </View>
  )
}

export default SearchResults;