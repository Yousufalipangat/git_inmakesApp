import React , {Component} from "react";

import{ 
    View,
    StyleSheet,
    Text,
    Image,


} from 'react-native';



export default class Exam extends Component{
    render(){
        return(
            <View style={style.container}>
                <View style={style.header}>
                    <Text>Exam</Text>
                    
                </View>

            </View>
        )
    }
}

const style=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'lightblue',
    },
   

})