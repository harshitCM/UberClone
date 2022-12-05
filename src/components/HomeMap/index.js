import { FlatList, Image } from 'react-native'
import React from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = (props) => {

  const getImage =(type)=>{
    if (type === 'UberX'){
      return require('../../assets/images/top-UberX.png')
    }
    if (type === 'Comfort'){
      return require('../../assets/images/top-Comfort.png')
    }
      return require('../../assets/images/top-UberXL.png')    
  }

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

      {cars.map((car)=>(
          <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
         <Image 
          style={{width: 70, 
            height: 70, 
            resizeMode: 'contain',
            transform: [{
              rotate: `${car.heading}deg`
            }]
          }}
          source={getImage(car.type)}
         />
        </Marker>
      ))}

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

export default HomeMap;