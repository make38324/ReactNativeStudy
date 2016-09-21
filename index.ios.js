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
    View,
    ListView
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height,scale}=Dimensions.get('window');
/**
 * Es5写法
 */
//var HelloRN=React.createClass({
//    render() {
//        return (
//            <View style={styles.container}>
//                <View onPress={this.processPress("点击")}>
//                    <TouchableOpacity activeOpacity={0.2}>
//                        <Text style={{marginTop: 10,backgroundColor: 'blue',width:width}}>点击变色</Text>
//                    </TouchableOpacity>
//                    <Text>{this.state.title}</Text>
//                </View>
//            </View>
//        );
//    },
//    getInitialState(){
//        return {
//            title:"不透明触摸"
//        }
//    },
//    processPress(event) {
//        //AlertIOS.alert("被点击");
//        this.setState({
//            title:event
//        })
//    }
//})
/**
 * Es6写法
 */
//class HelloRN extends Component {
//    render() {
//        return (
//            <View style={styles.container}>
//                <View onPress={this.processPress()}>
//                    <TouchableOpacity activeOpacity={0.2}>
//                        <Text style={{marginTop: 10,backgroundColor: 'blue',width:width}}>点击变色</Text>
//                    </TouchableOpacity>
//                </View>
//            </View>
//        );
//    }
//
//    processPress() {
//        AlertIOS.alert("被点击");
//    }
//}
class HelloRN extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2']),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
                />
        );
    }
}
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
