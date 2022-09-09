import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    FlatList,
    Image,


} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import VideoList from "./VideoList";
import ChapterTest from './ChapterTest';
import Resources from './Resources';
import QNBank from './QNBank';

const TopBar = createMaterialTopTabNavigator()

export default class Chapter extends Component {
    render() {
        return (
            <View style={chapter_style.container}>
                <View style={chapter_style.course_details}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderColor: '#666', borderWidth: 2, borderRadius: 5, }}>
                            <Icon name='navigate-before' size={20} color='#00c458' />
                        </View>

                        <Text style={{ width: '100%', color:'#eee', fontSize:19,marginLeft:100 }}>Biology</Text>
                    </View>
                    <View style={{ marginTop: 55 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Long chapter name can be shown here</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                                <Icon name='radio-button-checked' size={20} color='#00c458' />
                                <Text style={{ color: '#00c458' }}> Chapters 1</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginRight: 20 }}>
                                <Icon name='radio-button-checked' size={20} color='#00c458' />
                                <Text style={{ color: '#00c458' }}> 5 parts</Text>
                            </View>
                        </View>
                    </View>
                </View >
               
                    <TopBar.Navigator
                        screenOptions={()=>({
                            
                            tabBarStyle: {
                                backgroundColor: '#002333',
                              

                            },
                            tabBarActiveTintColor:'white',
                            tabBarInactiveTintColor:'#aaa',
                            
                            tabBarLabelStyle: {
                              //  color: '#aaa',
                                textTransform:'none',
                                fontSize:12,
                                fontWeight:'700'
                                
                            
                            },
                            tabBarIndicatorStyle: {
                                backgroundColor: '#00c458',
                                height: 5,
                            },
                        })}
                    >
                        <TopBar.Screen
                            name="Videos"
                            component={VideoList}
                        />
                        <TopBar.Screen
                            name="Chapter Test"
                            component={ChapterTest}
                        />
                        <TopBar.Screen
                            name="Resources"
                            component={Resources}
                        />
                        <TopBar.Screen
                            name="QN Bank"
                            component={QNBank}
                        />
                        
                    </TopBar.Navigator>
               

            </View>

        )
    }

}
const chapter_style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',

    },
    course_details: {
        width: '100%',
        height: 230,
        backgroundColor: '#002333',
        padding: 20,


    },
    tabbar: {

    }




})