import React, { Component } from 'react';
import { 
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Picker,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const categories = [
  {id: 1, value: 'Bar'},
  {id: 2, value: 'Coffee'},
  {id: 3, value: 'Restaurant'},
  {id: 4, value: 'Activity'},
]

export default class NewPlace extends Component {
  static navigationOptions = {
    model: 'modal',
    header: 'none',
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      category: '',
      rating: null,
      pickerVisible: false,
    }
  }

  togglePicker = () => {
    Keyboard.dismiss()
    this.setState({pickerVisible: !this.state.pickerVisible})
  }

  render() {
    const { name, category, rating, pickerVisible } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>New Place</Text>
          <Button 
            title='Cancel'
            onPress={() => this.props.navigation.goBack(null)}
          />
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.nameInput}
            onChangeText={(text) => this.setState({name: text})}
            placeholder='Name...'
            value={name}/>
          <TextInput
            style={styles.ratingInput}
            onChangeText={(text) => this.setState({rating: text})}
            placeholder='Rating...'
            keyboardType='number-pad'
            value={rating}/>
          <TextInput
            value={category}
            placeholder='Category...'
            onFocus={this.togglePicker}
            style={styles.nameInput}
          />
          <Button
            title='Submit'
            onPress={() => alert(this.state.category)}
          />
          {pickerVisible &&
              <Picker
                selectedValue={category}
                onValueChange={(itemValue, itemIndex) => this.setState({category: itemValue})}
                style={{height: 50, width: 100, marginTop: 100}}>
                <Picker.Item label='Bar' value='Bar' />
                <Picker.Item label='Coffee' value='Coffee' />
                <Picker.Item label='Restaurant' value='Restaurant' />
                <Picker.Item label='Activity' value='Activity' />
              </Picker>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20
  },
  formContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  nameInput: {
    height: 40,
    width: '80%',
    borderColor: '#888',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
  },
  ratingInput: {
    height: 40,
    width: '25%',
    borderColor: '#888',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 15,
  }
})
