import React from 'react'

import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY= 'AIzaSyCMdRgIYtGZOPAON3HB-M4lEOjiNZn2w9U'

const RouteMap = (
  {origin, destination}
  ) => {

        // const origin = {
        //   latitude: 28.450627,
        //   longitude: -16.263045,
        // } ;
        // const destination= {
        //   latitude: 28.460127,
        //   longitude: -16.269045,
        // };


        const originLoc = {
          latitude: origin.details.geometry.location.lat,
          longitude: origin.details.geometry.location.lng,
        };

        const destinationLoc = {
          latitude: destination.details.geometry.location.lat,
          longitude: destination.details.geometry.location.lng,
        };


  return (
    // <View style={{height: 300, 
    //   backgroundColor: '#a0abff',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}
    // >
      <MapView

      // style={StyleSheet.absoluteFill}

      style={{width: '100%', height: '100%'}}

      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}

      initialRegion =
      
      {{
      latitude: 28.450627,
      longitude: -16.263045,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0121,
    }}
    >
         <MapViewDirections
        //  origin={origin}
        //  destination={destination}

    origin={originLoc}
    destination={destinationLoc}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={5}
    strokeColor= 'black'
  />

    <Marker
     coordinate={originLoc}
     title={'Origin'}
    />

<Marker
     coordinate={destinationLoc}
     title={'Destination'}
    />

  </MapView>
          

    // </View>
  );
}

// const styles = StyleSheet.create({
//     text:{
//       fontWeight: 'bold',
//       alignItems: 'center',
//       justifyContent: 'center',
      
//     }
// })

export default RouteMap;