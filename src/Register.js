import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,

} from 'react-native';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBox}>
                    <Image style={styles.logo} source={require('./Assets/inmakesLogo.png')} />


                </View>
                    <View style={styles.messageBox}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#444' }}>Enter your mobile number</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#bbb' }}>We will send you an OTP to verify</Text>
                    </View>
                
                    <View style={styles.formBox}>
                        <View style={{ flexDirection: 'row', width: '85%', justifyContent: 'center' }}>
                            <TextInput keyboardType="numeric" maxLength={3} placeholder="+91" placeholderTextColor={'#555'} style={[styles.inputField, { width: '20%' }]}></TextInput>
                            <TextInput keyboardType="numeric" maxLength={10} placeholder="Mobile number" placeholderTextColor={'#555'} style={[styles.inputField, { width: '80%' }]}></TextInput>
                        </View>
                        <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('OTP')}>
                            <Text style={{ color: 'white' }}>Continue</Text>
                        </TouchableHighlight>

                    
                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'white',


    },
    topBox: {
        backgroundColor: 'white',
        width: '100%',
        height: '60%',
        justifyContent: "center",
        alignItems: 'center',
    },
    
    messageBox: {

        width: '100%',
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formBox: {
        backgroundColor: '#002333',
        width: '100%',
        height: 190,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',


    },
    inputField: {

        height: 55,
        backgroundColor: 'rgb(6,46,64)',
        borderRadius: 4,
        marginHorizontal: 2,
        marginVertical: 10,
        color: 'white',
        padding: 15

    },
    logo: {
        width: "50%",
        height: "20%",
        resizeMode: "contain",

    },
    button: {
        width: 100,
        height: 55,
        backgroundColor: '#00c458',
        borderRadius: 4,
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',



    }

})