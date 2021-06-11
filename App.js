import { createRequire } from 'node:module';
import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity, 
  Text, 
  TextInput,
  View, 
  Image
} from 'react-native';
import AgeValidator from './app/components/ageValidator'
import MyList from './app/components/myList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <AgeValidator />
        <MyList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },
  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF'
  },
})