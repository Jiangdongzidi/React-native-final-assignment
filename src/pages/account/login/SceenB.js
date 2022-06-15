import React,{Component} from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
export default class ScreenB extends Component{

    render(){
        const {navigation}=this.props
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>ScreenB</Text>
                <Button
                  title='返回'
                  onPress={()=>{
                      navigation.goBack()
                  }}
                />
            </View>
        )
    }

}

