import React, { Component } from 'react';
import PlaceDetail from '../components/PlaceDetail';

export default class PlacesListScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Detail',
  }

  render() {
    return (
      <PlaceDetail navigation={this.props.navigation} />
    )
  }
}
