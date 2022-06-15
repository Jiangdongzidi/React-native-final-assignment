import React ,{Component} from 'react'
import {
    View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './src/pages/account/login/SceenA';
import ScreenB from './src/pages/account/login/SceenB';
import Login from './src/pages/account/login/Login';
import Home from './src/pages/account/login/Home';
import Register from './src/pages/account/login/Register';
import LoginPassword from './src/pages/account/login/LoginPassword';
const Stack=createStackNavigator();
export  default  class  RootStack extends Component{

    render(){
       return (<NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName='ScreenA'>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Register' component={Register}/>
                <Stack.Screen name='LoginPassword' component={LoginPassword}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='ScreenA' component={ScreenA}/>
                <Stack.Screen name='ScreenB' component={ScreenB}/>
            </Stack.Navigator>
        </NavigationContainer>)
    }

}
