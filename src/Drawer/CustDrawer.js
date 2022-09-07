import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";
import {

    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableHighlight,
    


}from 'react-native'
import { style } from "../Tabbar/Home";

export default function CustDrawer({navigation}){
return(

    <ScrollView style={drawer_styles.container}>
        <View style={[drawer_styles.check_button,{borderColor:'#666'}]}>
            <Icon name='close' size={18} color='#00c458' onPress={()=>{navigation.closeDrawer()}}/>
        </View>
        <View style={drawer_styles.profile_tile}>
            <View style={drawer_styles.profile_image}/>
            <View style={{width:120}}>
                <Text style={{color:'#ccc',fontWeight:'bold', }}>Aaron Taylor</Text>
                <Text style={{color:'#666', }}>ID: 1234</Text>
            </View>
            <Icon name="navigate-next" size={18} color='#00c458' />

        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Exam corner</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Subscriptions</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Analytics</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Downloads</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Notification</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Referrals</Text>
        </View>
        <View style={drawer_styles.drawer_list}>
        <View style={drawer_styles.check_button} />
        <Text style={{color:'#aaa',marginLeft:15}}>Share app</Text>
        </View>
        <View style={[drawer_styles.drawer_list,{borderBottomWidth:0}]}>
        <View style={[drawer_styles.check_button,{borderColor:'rgb(238,63,67)'}]} />
        <Text style={{color:'rgb(238,63,67)',marginLeft:15}}>Logout</Text>
        </View>

        <TouchableHighlight style={drawer_styles.button}>
                <Text style={{color:'rgb(0,120,70)'}}>Enquire now</Text>
        </TouchableHighlight>



    </ScrollView>
)

}

const drawer_styles= StyleSheet.create(
    {
        container:{
            backgroundColor:'#002333',
            padding:25,
            height:'100%',
            width:'100%'
            

        },
        check_button:{
            height:33,
            width:33,
            borderColor:'#rgb(0,120,70)',
            borderRadius:5,
            borderWidth:2,
            justifyContent:'center',
            alignItems:'center',

        },
        profile_tile:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginVertical:30,

        }
        ,
        profile_image:{
            width:70,
            height:70,
            borderWidth:3,
            borderRadius:35,
            borderColor:'#00c458',
            backgroundColor:'#eee',

        },
        drawer_list:{
            flexDirection:'row',
            alignItems:'center',
            borderBottomColor:'#555',
            borderBottomWidth:1,
            height:60,


        },
        button:{
            width:'100%',
            borderColor:'#rgb(0,120,70)',
            borderRadius:8,
            borderWidth:2,
            height:55,
            justifyContent:'center',
            alignItems:'center',
            marginVertical:20,

        }
        

    }
)