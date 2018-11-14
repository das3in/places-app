import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PlaceItem = ({place, navigate}) => (
  <TouchableOpacity 
    style={styles.container}
    onPress={() => navigate.navigate('Details', {place: place})}>
    <View style={styles.containerText}>
      <Text style={styles.name}>{place.name}</Text>
      <View style={styles.rating}>
        {Array.from({length: place.rating}, (_, k) => (
          <Ionicons name='md-star' size={14} color='gold' key={k} />
        ))}
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft:16,
    marginRight:16,
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  name: {
    fontSize: 18,
    color: '#000',
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  rating: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
  }
})


export default PlaceItem;
