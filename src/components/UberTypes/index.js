import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types';

const UberTypes = (props) => {
  const confirm =()=>{
    console.warn('confirm');
  }

  return (
    <View>
      {typesData.map((type) => (
      <UberTypeRow type={type} key={type.id} />
      ))}

      <Pressable 
      style={styles.confirmUber}
      onPress={confirm}>
        <Text style={styles.buttonText}>
          Confirm Uber
        </Text>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
confirmUber: {
  // width: '100%',
  backgroundColor: 'black',
  padding: 10,
  margin: 10,
  alignItems: 'center',
},

buttonText: {
 color: 'white',
 fontWeight: 'bold',

}
});

export default UberTypes;