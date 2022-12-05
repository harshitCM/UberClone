import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles';

const CovidMessage = (props) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Travel only if necessary</Text>
      <Text style = {styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
      <Text style = {styles.learnMore}>Learn More</Text>
    </View>
  )
}

export default CovidMessage;