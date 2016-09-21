/**
 * Created by mac on 16/9/21.
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
var Dimensions = require('Dimensions');
var {width,height,scale}=Dimensions.get('window');
class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: width,height: height}}
                    source={require('./image/backbg.png')}
                    >
                    <Image
                        style={{height: height/4,width: width}}
                        source={require('./image/backbghead.png')}
                        >
                    </Image>
                    <View style={{width:width,flex:8,alignItems:'center'}}>
                        <View style={styles.nameborder}>
                            <Text
                                style={{fontSize: 20,marginLeft: 20,marginRight: 10,color: 'white',backgroundColor:'#00000000'}}>+86</Text>
                            <Image
                                source={require('./image/down.png')}
                                style={{width: 20,height: 20,marginRight: 10}}
                                />
                            <View
                                style={{backgroundColor: "#ffffff",width: 1,height: height/12}}
                                />
                            <TextInput
                                placeholder="请输入手机号"
                                style={{flex:1,marginLeft: 10,backgroundColor: 'transparent'}}
                                clearButtonMode='always'
                                keyboardType='numeric'
                                />
                        </View>
                        <View style={styles.pwdborder}>
                            <Image
                                source={require('./image/whitephone.png')}
                                style={{width: 20,height: 20,marginRight: 37,marginLeft: 37}}
                                />
                            <View
                                style={{backgroundColor: "#ffffff",width: 1,height: height/12}}
                                />
                            <TextInput
                                placeholder="请输入验证码"
                                style={{flex:1,marginLeft: 10,backgroundColor: 'transparent'}}
                                clearButtonMode='always'
                                keyboardType='numeric'
                                />
                            <View
                                style={{borderColor: 'white',borderWidth: 1,padding: 5,marginRight:15,borderRadius:15}}>
                                <Text style={styles.whitefontpwd}>获取验证码</Text>
                            </View>
                        </View>
                        <Text style={{color:'white',backgroundColor: 'transparent',marginTop:20}}>长时间收不到验证码可尝试重新发送</Text>
                        <View style={styles.loginBtnStyle}>
                            <Text style={{color: 'white'}}>进入</Text>
                        </View>
                    </View>
                </Image>
                <View style={styles.viewbottom}>
                    <View style={{flexDirection: 'row',alignItems:'center'}}>
                        <View style={{backgroundColor: 'blue',flex:1,height: 1}}></View>
                        <Text style={{alignSelf: 'flex-start',color:'blue',backgroundColor: 'transparent',fontSize:18}}>OR</Text>
                        <View style={{backgroundColor: 'blue',flex:1,height: 1}}></View>
                    </View>
                    <View style={{backgroundColor:'transparent',flexDirection: 'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection: 'row',alignItems: 'center',paddingLeft: 10}}>
                            <Image
                                source={require('./image/gou.png')}
                                style={{width: 20,height: 20}}
                                />
                            <Text style={{color:'blue'}}>用户协议</Text>
                        </View>
                        <Text style={{color: 'blue',marginRight: 10}}>密码登录</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    nameborder: {
        width: 7 * width / 8,
        borderWidth: 1,
        height: height / 12,
        borderColor: 'white',
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 3*width/8
    },
    pwdborder: {
        width: 7 * width / 8,
        borderWidth: 1,
        height: height / 12,
        borderColor: 'white',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderRadius: 3*width/8
    },
    whitefontpwd: {
        color: 'white',
        backgroundColor: '#00000000',
        fontSize: 15,
    },
    loginBtnStyle:{
        height:50,
        width:width*0.9,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    viewbottom:{
        bottom:25*scale
    }
});
// 输出类
module.exports = LoginView;