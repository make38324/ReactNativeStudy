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
var LoginView=require("./LoginView");
class HelloRN extends Component {
    render() {
        return (
            <LoginView />
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
