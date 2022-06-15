import React, {Component} from 'react'
import { View, Text, Button, StatusBar, Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {pxToDp} from "../../../utils/stylesKits"
export default class LoginPassword extends Component {
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
                        <View><Text style={{fontSize:pxToDp(20),color:"#000",fontWeight:"bold", marginTop:10}}>密码登录</Text></View>
                    </View>
                    {/* 手机号 */}
                    <View>
                        <Text style={{fontSize:pxToDp(16), marginTop:20, fontWeight:"bold"}}>手机号或账号：</Text>
                        <TextInput 
                            style={{height:40,borderBottomColor:'gray', borderWidth:1, marginTop:10, borderRadius:5}}
                            placeholder="请输入手机号或账号"
                            >
                        </TextInput>

                    </View>
                    {/* 验证码 */}
                    <View>
                        <Text style={{fontSize:pxToDp(16), marginTop:10, fontWeight:"bold"}}>密码：</Text>
                        <TextInput 
                            style={{height:40, borderColor:'gray', borderWidth:1, marginTop:10, borderRadius:5}}
                            placeholder="请输入密码"
                            >
                        </TextInput>
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
                            style={{color:"#00b4fe",fontSize:13,marginLeft:135}}
                            onPress={()=>{
                                navigation.navigate('Register')
                            }}
                            >
                            忘记密码？</Text>
                        <Text 
                            style={{color:"#00b4fe",fontSize:13,marginLeft:230,marginBottom:30}}
                            onPress={()=>{
                                navigation.navigate('Login')
                            }}
                            >
                            手机号登录?</Text>
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
