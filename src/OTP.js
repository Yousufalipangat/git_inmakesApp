import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,

} from 'react-native';

export default class OTP extends Component {

    constructor() {
        super();
        this.state = {
            phNo: "NA",

        }
    }

    render() {
        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.scrollPageStyle}>
                <View style={styles.topBox}>
                    <Image style={styles.logo} source={require('./Assets/inmakesLogo.png')} />
                </View>


                <View>
                    <View style={styles.messageBox}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#444' }}>Verification code</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#bbb' }}>Please type the verification code sent to</Text>
                        <Text style={{ marginVertical: 20, color: 'black' }}> {this.state.phNo}</Text>
                    </View>

                    <View style={styles.formBox}>
                        <View style={{ width: '100%', alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                                <TextInput keyboardType="numeric" maxLength={1} style={styles.inputField}></TextInput>
                            </View>
                            <TouchableHighlight style={styles.button}>
                                <Text style={{ color: 'white' }}>Resend OTP</Text>
                            </TouchableHighlight>
                            <Text style={{ fontSize: 11, color: '#666', marginVertical: 10 }}>Resend after 2s</Text>
                        </View>
                        <View style={styles.contactBox}>
                            <Icon name="call" size={20} color="#00c458" />
                            <Text style={{ color: '#00c458', marginLeft: 8, }}>Contact Us</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    scrollPageStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',

    },

    topBox: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: 'center',
    },

    messageBox: {

        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
    },

    formBox: {
        backgroundColor: '#002333',

        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,


    },
    inputField: {

        height: 55,
        backgroundColor: 'rgb(6,46,64)',
        borderRadius: 4,
        marginHorizontal: 2,
        marginVertical: 10,
        padding: 15,
        color:'black',
        fontWeight:'bold',
        fontSize:21,

    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: "contain",
        marginTop: 10,


    },
    contactBox: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#002333',
        width: '100%',

    }
    ,
    button: {
        width: 100,
        height: 55,
        backgroundColor: '#00c458',
        borderRadius: 4,
        width: '88%',
        alignItems: 'center',
        justifyContent: 'center',



    }

})