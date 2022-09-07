import React, { Component } from "react";

import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";



export default function CustTabBar({ state, descriptors, navigation }) {
    return (
        <View style={tab_styles.tab_container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label = options.tabBarLabel !== undefined ?
                    options.tabBarLabel
                    : options.title !== undefined ?
                        options.title
                        : route.name;
                const isFocused = state.index === index


                const onPress = () => {
                    navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    })

                    if (!isFocused) {
                        navigation.navigate(route.name)
                    }

                }

                var name = '';
                switch (route.name) {
                    case 'Home':
                        name = 'home'
                        break;
                    case 'Recent':
                        name = 'play-arrow'
                        break;
                    case 'Exam':
                        name = 'article'
                        break;
                    case 'Profile':
                        name = 'person'
                        break;
                    case 'Contact':
                        name = 'mail'
                        break;
                }
                //  console.log(name);
                return (
                    isFocused ?

                        <View key={route.name} style={tab_styles.focus_tab_style}><Icon name={name} size={30} onPress={onPress} color='#00c458'/><Text style={tab_styles.label}>{label}</Text></View>

                        :

                        <View key={route.name} style={tab_styles.non_focus_tab_style}><Icon name={name} size={30} onPress={onPress} color='#bbb'/></View>



                )

            })
            }
        </View>
    )


}

const tab_styles = StyleSheet.create(
    {
        tab_container: {
            flexDirection: 'row',
            position:'absolute',
           width:'80%',
            marginHorizontal:10,
            height: 65,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical:10,
            bottom:25,
            alignSelf:'center',
            borderRadius:10,
           
          
            
          


        },
        focus_tab_style:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'rgb(202,244,223)',
            marginHorizontal:5,
            paddingHorizontal:15,
            borderRadius:30,
             height:45,
            
        },

        non_focus_tab_style:{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            marginHorizontal:5,
        },
        label:{
            color:"#00c458",

        }
    }
)
