import React,{Component} from "react";

import {Biology_chapters} from './Course_chapter.json'

import { 
    View,
    ScrollView,
    Text,
    StyleSheet,


} from "react-native";
import  Icon  from "react-native-vector-icons/MaterialIcons";


export default class Course extends Component{
render(){
    return(
        <View style={course_style.container}>
            <View style={course_style.course_details}>
                <View style={{height:30,width:30,justifyContent:'center',alignItems:'center', borderColor:'#666',borderWidth:2,borderRadius:5,}}>
                    <Icon name='navigate-before' size={20} color='#00c458'/>
                </View>
                <View style={{marginTop:55}}>
                    <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Biology</Text>
                    <View style={{flexDirection:'row',marginTop:10}}>
                        <View style={{flexDirection:'row',marginRight:20}}>
                        <Icon name='radio-button-checked' size={20} color='#00c458'/>
                        <Text style={{color:'#00c458'}}>{Biology_chapters.total_chapter} Chapters</Text>
                        </View>
                        <View style={{flexDirection:'row',marginRight:20}}>
                        <Icon name='radio-button-checked' size={20} color='#00c458'/>
                        <Text style={{color:'#00c458'}}>{Biology_chapters.total_hours} Chapters</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView  contentContainerStyle={course_style.courseList_container}>
                {Biology_chapters.chapter_list.map((chapter)=>{

                    return(
                        <View style={{width:'100%',height:130,backgroundColor:'white',marginVertical:10,borderRadius:10,elevation:2,padding:15}}>
                            <View>
                                <Text style={{fontWeight:'bold',fontSize:20,color:'rgb(31,62,76)'}}>Long Chapter name can be shown here</Text>
                            </View>
                            <View style={{marginVertical:10, flexDirection:'row'}}>
                                <View style={{marginRight:20,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name='radio-button-checked' color='#aaa'/>
                                    <Text style={{color:'#aaa',marginLeft:5}}>{chapter.chapterName}</Text>
                                </View>

                                <View  style={{marginRight:20,flexDirection:'row',alignItems:'center'}}>
                                    <Icon name='radio-button-checked' color='#aaa'/>
                                    <Text style={{color:'#aaa',marginLeft:5}}>{chapter.points} points</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}

            </ScrollView>

        </View>

    )
    }

}
const course_style=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',

    },
    course_details:{
        width:'100%',
        height:210,
        backgroundColor:'#002333',
        padding:20,
        

    },
    courseList_container:{
        padding:20,
        


    }

})