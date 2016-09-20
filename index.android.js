/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
    ListView,
  View
} from 'react-native';

/*********第一个******/
class HelloRN extends Component {
  render() {
    return (
        <View style={styles.rowstyle}>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <View style={{backgroundColor:'red',height:30,width:30}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
        </View>

    );
  }
}
/**
 * 第二个
 */
  var Dimensions=require('Dimensions');
  var {width,height,scale}=Dimensions.get('window');
class Greeting extends Component {
  render() {
    return (
        <Text>Hello {this.props.name}!</Text>
    );
  }
}
class HelloRN2 extends Component {
  render() {
    return (
        <View style={styles2.container}>
          <View style={{backgroundColor:'red',height:30,width:30,alignSelf:'flex-start'}}></View>
          <View style={{backgroundColor:'green',height:50,width:30}}></View>
          <View style={{backgroundColor:'blue',height:40,width:30}}></View>
          <Text style={{alignSelf:'center',color:'blue',justifyContent:'center'}}>
            屏幕宽度:{width+"\n"}
            屏幕高度:{height+"\n"}
            屏幕分辨率:{scale+'\n'}
          </Text>
          <Greeting name='ssjdj' />
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                 style={{width: 768, height: 100,alignSelf:'center'}} />
          <Image source={require('./image/aa.jpg')}
                 style={{width: 400, height: 400,alignSelf:'center',justifyContent: 'center'}} />
        </View>

    );
  }
}
/**
 * 定时器
 */
class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    // 每1000毫秒对showText状态做一次取反操作
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    // 根据当前showText的值决定是否显示text内容
    let display = this.state.showText ? this.props.text : ' ';
    return (
        <Text>{display}</Text>
    );
  }
}

class BlinkApp extends Component {
  render() {
    return (
        <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
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
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rowstyle:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'cyan',
    alignItems:"flex-end",
    flexWrap:'wrap',
  }

});
const styles2=StyleSheet.create({
  container:{
    flexDirection:'column',
    justifyContent:'space-around',
    backgroundColor:'cyan',
    alignItems:"flex-start",
    flexWrap:'wrap'
  }
})

AppRegistry.registerComponent('HelloRN', () => ListViewTest)
