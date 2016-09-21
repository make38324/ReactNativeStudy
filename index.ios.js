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
    TouchableOpacity,
    AlertIOS,
    ScrollView,
    View,
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height,scale}=Dimensions.get('window');
/**
 * Es5写法
 */
var HelloRN=React.createClass({
    render() {
        return (
            <ScrollView
                horizontal={true}//横向
                pagingEnabled={true}//分页滑动
                >
                {this.renderChildren()}
            </ScrollView>
        );
    },
    getInitialState(){
        return {
            title:"不透明触摸"
        }
    },
    processPress(event) {
        //AlertIOS.alert("被点击");
        this.setState({
            title:event
        })
    },
    renderChildren(){
        var child=[];
        var colors=['red','blue','cyan','black','pink']
        for(var i=0;i<10;i++){
            child.push(
                <View key={i}
                      style={{backgroundColor: colors[i%5],width: width,height: 200}}
                    />
            );
        }
        return child;
    }
})


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contain_text: {
        height: 60,
        borderColor: "cyan",
        borderWidth: 1,
        width: width,
        marginTop: 20
    },
});
AppRegistry.registerComponent('HelloRN', () => HelloRN)
