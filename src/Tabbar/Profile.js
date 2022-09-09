import React, { Component } from "react";

import {
    View,
    StyleSheet,
    Text,
    Image,
    ScrollView,
    TouchableHighlight


} from 'react-native';



import Icon from "react-native-vector-icons/MaterialIcons";

export default class Profile extends Component{
    render() {
        return (

            <View style={style.container}>
                <View style={style.header}>
                    <View style={{ flex: 1, flexDirection: 'row' }} >
                        <Text style={{ color: 'white', fontSize: 17, marginLeft: '60%' }}>Profile</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='notifications' size={23} color='#ddd' style={{ marginHorizontal: 15 }} />
                        <View style={style.header_button}>
                            <Icon name='grid-view' size={20} color='#00c458' onPress={()=>{this.props.navigation.openDrawer()}} />
                        </View>
                    </View>



                </View>
                <View style={{ height: 150, width: '100%', backgroundColor: '#002333' }} />
                <View style={{ height: '75%', width: '85%', margin: 15, backgroundColor: '#eee', top: -170, borderRadius: 10 }}>
                    <ScrollView contentContainerStyle={{flexGrow: 1 }}>
                        <View style={{backgroundColor:'white',padding:10,borderRadius:10}}>

                            <View style={[style.items, { borderBottomWidth: 0 }]}>
                                <View>
                                    <Icon name='person' size={40} />
                                </View>
                                <View>
                                    <Text style={{ color: 'black', fontWeight: 'bold' }}> Jane Doe</Text>
                                    <Text> ID: 12345</Text>

                                </View>

                            </View>

                            <View style={style.items}>

                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Personal Info</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Account Settings</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Aaron Tyler</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Email</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>emailid@gmil.com</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Number</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>+91 979283XXXX </Text>
                            </View>
                            <View style={style.items}>

                                <Text style={{ flex: 1, color: 'black', textAlignVertical: 'center', fontWeight: 'bold' }}>Contact Info</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Center</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Inmakes edu</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Course</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Plus two science</Text>
                            </View>
                            <View style={style.items}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Payement Status</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Free</Text>
                            </View>
                            <View style={[style.items, { borderBottomWidth: 0 }]}>
                                <Text style={{ flex: 1, textAlignVertical: 'center' }}>Expiry Date</Text>
                                <Text style={{ flex: 1, color: 'black', fontWeight: 'bold', textAlignVertical: 'center' }}>Not Applicable</Text>
                            </View>
                        </View>

                        <TouchableHighlight style={{ marginVertical: 10, width: '100%', borderRadius: 10, height: 55, padding: 15, backgroundColor: '#00c458' }}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="credit-card" size={23} color="white" />
                                    <Text style={{ color: 'white', fontWeight: 'bold' }}>  Custom Payement</Text>
                                </View>
                                <Icon name="navigate-next" size={23} color='white' />
                            </View>
                        </TouchableHighlight>
                    </ScrollView>

                </View>

            </View>

        )
    }
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'White',
        alignItems: 'center'

    },
    header: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#002333',
        paddingHorizontal: 30,

    },
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
    items: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        height: 48,

    }

})