import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetail = ({navigation}) => {
  const place = navigation.getParam('place')
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{place.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default PlaceDetail;
