/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button,FlatList,ScrollView
} from 'react-native';
export default class Message  extends Component{
  constructor(props) {
    super(props);
    this.state = {
        products: 'http://colorme.vn:8000/products?filter=7&user_id=14935' ,
       
    }
}
  render() {
    return (
      <View style={styles.container}>
       <Text>{this.props.navigation.state.params.title}</Text>
       <Text>{this.props.navigation.state.params.author}</Text>
       <Text>{this.props.navigation.state.params.email}</Text>
       <Text>{this.props.navigation.state.params.phone}</Text>
        <ScrollView 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
