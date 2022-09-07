import React,{Component} from "react";


import {chapter_1} from './chapter_data.json'
import { 
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList,
    Image,


} from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class VideoList extends Component{
render(){
    return(
            <ScrollView  contentContainerStyle={course_style.courseList_container}>
                {chapter_1.map((part)=>{

                    return(
                        <View key={part.id} style={{width:'100%',height:260,backgroundColor:'white',marginVertical:10,borderRadius:10,elevation:2}}>
                            <View>
                                <Image style={course_style.thumbnail} source={{uri:part.thumbnail}}/>
                                <View style={course_style.button}>
                                    <Text style={{color:'white'}}>Biology</Text>
                                </View>
                            </View>
                            <View style={{margin:15}}>
                            <View>
                                <Text style={{fontWeight:'bold',fontSize:20,color:'rgb(31,62,76)'}}>Long Chapter name can be shown here</Text>
                            </View>
                            <View style={{marginVertical:10, flexDirection:'row'}}>
                                <View style={{marginRight:20,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name='radio-button-checked' color='#aaa'/>
                                    <Text style={{color:'#aaa',marginLeft:5}}>Chapter 1</Text>
                                </View>

                                <View  style={{marginRight:20,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name='radio-button-checked' color='#aaa'/>
                                    <Text style={{color:'#aaa',marginLeft:5}}>{part.id}</Text>
                                </View>
                            </View>
                        </View>
                        </View>
                    )
                })}

            </ScrollView>

        

    )
    }

}
const course_style=StyleSheet.create({
  
    courseList_container:{
        padding:20,
        backgroundColor:'#eee',
        


    },
    thumbnail:{
        height:150,
        width:'100%'
    },
    button:{
        backgroundColor:'#00c458',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        padding:5,
        bottom:10,
        right:10,

    }

})