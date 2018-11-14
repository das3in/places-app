import React from 'react';
import { createStackNavigator } from 'react-navigation';
import PlacesListScreen from './src/screens/PlacesListScreen';
import PlacesDetailScreen from './src/screens/PlacesDetailScreen';
import NewPlaceScreen from './src/screens/NewPlaceScreen';

const MainStack = createStackNavigator({
  Places: PlacesListScreen,
  Details: PlacesDetailScreen,
});

const ModalStack = createStackNavigator(
  {
    Main: MainStack,
    NewPlace: NewPlaceScreen,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
)

export default ModalStack;
