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
    Image,
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
                    keyboardType={'numeric'}
                    defaultValue="默认文字"
                    autoFocus={true}
                    clearButtonMode={"always"}//android无效
                    placeholder={'我是占位文字'}
                    />
                <Image source={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
                       style={{width: 80,height: 80,marginTop: 10}}
                    />
                <Image
                    source={require('./image/danjianbao.png')}
                    style={{width: width,backgroundColor: 'black',marginTop: 10}}
                    resizeMode= {'stretch'}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    contain_text:{
        height:60,
        borderColor:"cyan",
        borderWidth:1,
        width:width,
    },
});
AppRegistry.registerComponent('HelloRN', () => HelloRN)
