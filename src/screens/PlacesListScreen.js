import React, { Component } from 'react';
import PlacesList from '../components/PlacesList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export default class PlacesListScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Places',
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
        <Ionicons name='ios-add' size={30} style={{marginRight: 24}} />
      </TouchableOpacity>
    )
  })

  render() {
    return (
      <PlacesList navigation={this.props.navigation} />
    )
  }
}
