/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    TextInput,
    Text,
    View
} from 'react-native';
var Dimensions=require('Dimensions');
var {width,height,scale}=Dimensions.get('window');

class HelloRN extends Component {
  render() {
    return (
        <View style={styles.container}>
          <TextInput
              style={styles.contain_text}
              keyboardType={'number-pad'}
              autoFocus={true}
              clearButtonMode={"always"}
              placeholder={'我是占位文字'}
              defaultValue="ok"
              />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contain_text:{
    height:60,
    borderColor:"cyan",
    borderWidth:1,
    width:width,
      marginTop:20
  },
});
AppRegistry.registerComponent('HelloRN', () => HelloRN)
