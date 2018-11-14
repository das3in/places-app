import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

const places = [
  {
    id: 1,
    name: 'Tatte',
    rating: 3.0,
    category: 'Coffee',
  },
  {
    id: 2,
    name: '21st Amendment',
    rating: 3.5,
    category: 'Bar',
  },
  {
    id: 3,
    name: 'Puritan and Co',
    rating: 4.0,
    category: 'Restaurant',
  },
]

export default class PlacesList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={places}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <PlaceItem
              place={item}
              navigate={this.props.navigation}
            />
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
