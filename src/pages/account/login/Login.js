import React, {Component} from 'react'
import { View, Text, Button, StatusBar, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {pxToDp} from "../../../utils/stylesKits"
export default class Login extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {navigation} = this.props
        return (
            <View>
                <StatusBar backgroundColor="trsnsparent" translucent={true}></StatusBar>
                {/* 图片 */}
                <Image style={{width:"100%", height:pxToDp(240)}} source={require("../../../static/Images/background.png")}/>
                {/* 手机号注册 */}
                <View style={{padding:pxToDp(20)}}>
                    <View>
                        <View><Text style={{fontSize:pxToDp(20),color:"#000",fontWeight:"bold", marginTop:10}}>手机号登录注册</Text></View>
                    </View>
                    {/* 手机号 */}
                    <View>
                        <Text style={{fontSize:pxToDp(16), marginTop:20, fontWeight:"bold"}}>手机号：</Text>
                        <TextInput 
                            style={{height:40,borderBottomColor:'gray', borderWidth:1, marginTop:10, borderRadius:5}}
                            placeholder="请输入手机号"
                            >
                        </TextInput>

                    </View>
                    {/* 验证码 */}
                    <View>
                        <Text style={{fontSize:pxToDp(16), marginTop:10, fontWeight:"bold"}}>验证码：</Text>
                        <TextInput 
                            style={{height:40, borderColor:'gray', borderWidth:1, marginTop:10, borderRadius:5}}
                            placeholder="请输入验证码"
                            >
                        </TextInput>
                        <Text style={{marginTop:6, color:"#00b4fe",fontSize:13 }}>56秒后重试</Text>
                    </View>
                    {/* 密码登录和注册 */}
                    <View style={{marginTop:5}}>
                        <Text 
                            style={{color:"#00b4fe",fontSize:13,}}
                            onPress={()=>{
                                navigation.navigate('Register')
                            }}
                            >
                            注册账号？</Text>
                        <Text 
                            style={{color:"#00b4fe",fontSize:13,marginLeft:250,marginBottom:30}}
                            onPress={()=>{
                                navigation.navigate('LoginPassword')
                            }}
                            >
                            密码登录?</Text>
                    </View>
                    {/* 登录按钮 */}
                    <View>
                        <Button
                            style={{marginTop:20,height:40}}
                            title="登录" 
                            onPress={()=>{
                                navigation.navigate('Home')
                            }}
                            />
                    </View>
                </View>
            </View>
        );
    }
} 
