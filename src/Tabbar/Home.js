import React, { Component } from "react";

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,



} from 'react-native';
import { Dropdown } from "react-native-element-dropdown";

import Icon from "react-native-vector-icons/MaterialIcons";

import { data as Coursedata } from '../Data/course.json'

const dark = '#002333';
const green = '#00c458';


export const Home_header = ({ navigation }) => {
    return (
        <View style={style.header}>
            <View style={{ flexDirection: 'row' }}>
                <View style={style.header_button}>
                    <Icon name='grid-view' size={20} color={green} onPress={() => { navigation.openDrawer() }} />
                </View>
                <Image style={style.logo} source={require('../Assets/inmakesLogo.png')} />
            </View>
            <View style={style.right_corner_button}>
                <Icon name="circle" size={23} color='#555' />
                <Text style={{ color: green, fontWeight: 'bold' }}>Classes</Text>
            </View>


        </View>
    )

}
export default class Home extends Component {
    constructor() {
        super();
        console.log()
        this.state = {
            user_name: 'Aaron Taylor',
        }
    }

    render() {
        return (
            <ScrollView>
                <ScrollView style={style.container}>
                    <View style={style.message_tile}>
                        <Text style={{ color: dark }}>Goodmorning</Text>
                        <Text style={{ color: dark, fontSize: 25, fontWeight: 'bold' }}>{this.state.user_name}</Text>

                    </View>
                    <View style={style.class_tile}>
                        <Text style={{ color: '#777' }}>Class</Text>
                        <Dropdown
                            data={[{ label: 'Plus two science', value: 'plus two science' }]}
                            valueField='value'
                            labelField="label"
                            selectedTextStyle={{ color: 'white' }}
                            containerStyle={{ backgroundColor: dark }}
                            renderItem={(data) => <View style={{ height: 55, backgroundColor: dark, justifyContent: 'center' }}><Text style={{ color: 'white' }}>{data.value}</Text></View>}
                            placeholderStyle={{ color: 'white' }}
                            placeholder='Plus two science'
                            onChange={() => { }}
                            style={{ height: 18 }}

                        />

                    </View>
                    <ScrollView horizontal={true} containerStyles={style.subject_tile} style={{ marginVertical: 15 }}>
                        <TouchableOpacity style={style.subj_button} onPress={()=>{this.props.navigation.navigate('Course')}} >
                            <Icon name="circle" size={25} color={green} />
                            <Text style={{ color: dark, marginHorizontal: 5 }}>Biology</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subj_button}>
                            <Icon name="circle" size={25} color={green} />
                            <Text style={{ color: dark, marginHorizontal: 5 }}>Physics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subj_button}>
                            <Icon name="circle" size={25} color={green} />
                            <Text style={{ color: dark, marginHorizontal: 5 }}>Chemistry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subj_button}>
                            <Icon name="circle" size={25} color={green} />
                            <Text style={{ color: dark, marginHorizontal: 5 }}>Mathematics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.subj_button}>
                            <Icon name="circle" size={25} color={green} />
                            <Text style={{ color: dark, marginHorizontal: 5 }}>English</Text>
                        </TouchableOpacity>


                    </ScrollView>
                    <Text style={{ color: '#666', fontWeight: 'bold', marginTop: 10, }}>Recent courses</Text>
                    <ScrollView horizontal={true} style={style.course_tile}>
                        {Coursedata.map((data) => (

                            <ImageBackground key={data.course_id} source={{ uri: data.thumbnail }} resizeMode='contain' style={[style.video_tile]}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 8 }}>
                                    <Icon name='play-circle-outline' size={30} color="white" />
                                    <Text style={{ color: 'white', fontSize: 12, marginLeft: 5 }}>{data.course}</Text>
                                </View>
                                <View style={style.progressbar}>
                                    <View style={[style.progressline, { width: (data.course_progress + '%') }]} />
                                </View>
                            </ImageBackground>

                        ))}



                    </ScrollView>
                    <ScrollView horizontal={true}>

                        <View style={style.bottom_card}>
                            <View style={{ flex: 0.7 }}>
                                <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: 'white', opacity: 0.1, marginVertical: 15 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Target live classes</Text>
                                <Text style={{ color: '#444' }}>Live classes by best teachers from LearningHub to clear your doubts and to provide individual attention</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight style={style.bottom_card_button}>
                                    <Text style={{ color: 'white' }}>Book a free class</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={style.bottom_card}>
                            <View style={{ flex: 0.7 }}>
                                <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: 'white', opacity: 0.1, marginVertical: 15 }} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Avail free online conselling session</Text>
                                <Text style={{ color: '#444' }}>By LearningHub's career experts</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TouchableHighlight style={style.bottom_card_button}>
                                    <Text style={{ color: 'white' }}>Book a free class</Text>
                                </TouchableHighlight>
                            </View>
                        </View>


                    </ScrollView>


                </ScrollView>
            </ScrollView>
        )
    }
}

export const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        padding: 25,
        // marginBottom: 20,


    },
    header: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 30,

    }
    ,
    header_button: {
        borderColor: '#ddd',
        borderWidth: 2,
        height: 35,
        width: 35,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,

    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 10,

    },
    right_corner_button: {
        borderColor: green,
        borderWidth: 2,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    message_tile: {
        marginVertical: 15

    },
    class_tile: {

        backgroundColor: dark,
        height: 80,
        borderRadius: 10,
        marginVertical: 15,
        paddingHorizontal: 30,
        justifyContent: 'center'
    },
    subject_tile: {
        flexDirection: 'row',



    },
    subj_button: {
        flexDirection: 'row',
        borderColor: dark,
        borderWidth: 1,
        height: 42,
        borderRadius: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginRight: 8,

    },
    course_tile: {


    },
    video_tile: {
        width: 190,
        height: 110,
        //   backgroundColor:'black',
        marginRight: 5,
        marginTop: 8,
        justifyContent: 'flex-end',
        marginBottom: 15,

    },
    progressbar: {
        width: '90%',
        height: 3,
        marginHorizontal: '5%',
        backgroundColor: '#444',
        marginBottom: 8,

    },
    progressline: {
        height: 3,
        backgroundColor: 'blue',
        width: "20%",


    },
    bottom_card: {
        backgroundColor: dark,
        height: 400,
        width: 230,
        borderRadius: 10,
        padding: 25,
        marginRight: 12,



    },
    bottom_card_button: {
        backgroundColor: green,
        width: 135,
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,


    }


})