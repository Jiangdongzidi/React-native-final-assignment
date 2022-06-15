import React,{Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
export default class Home extends Component{

    constructor(props) {
        super(props);
    }

    render(){

        const  {navigation} = this.props

        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>首页</Text>
                
            </View>
        )
    }

}

