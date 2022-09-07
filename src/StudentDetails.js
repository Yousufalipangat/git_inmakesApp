import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Dropdown } from "react-native-element-dropdown";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
    

} from 'react-native';

const data=[
{label:'kerala',value:'kerala'},
{label:'Tamil Nadu',value:'Tamil Nadu'},
{label:'kashmir',value:'kashmar'},
{label:'punjab',value:'punjab'},

]
export default class StudentDetails extends Component {

    constructor() {
        super();
        this.state = {
            state:'',

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
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#444' }}>Student details</Text>
                      </View>

                    <View style={styles.formBox}>
                        
                            <View style={{  width: '88%', justifyContent: 'center' }}>
                                <TextInput placeholder="Full name" placeholderTextColor={'#555'} style={styles.inputField}></TextInput>
                                <TextInput placeholder="Email" placeholderTextColor={'#555'} style={styles.inputField}></TextInput>
                                <Dropdown placeholder="Select state" placeholderStyle={{color:'#555'}}
                                selectedTextStyle={{color:'white'}}
                                containerStyle={{borderRadius:10,backgroundColor:'rgb(6,46,64)',borderColor:'#002356'}}
                                renderItem={(item)=>(<View style={{width:'100%',height:50,paddingLeft:10,justifyContent:'center'}}><Text style={{color:'#555'}}>{item.value}</Text></View>)}
                                value={this.state.state}
                                style={[styles.inputField]}
                                dropdownPosition='auto'
                                valueField='value' labelField="label" data={data}
                                onChange={(value)=>{this.state.value=value}}/>
                              <TextInput keyboardType="numeric" placeholder="Pin code" placeholderTextColor={'#555'} style={styles.inputField}></TextInput>
                              
                             </View>

                            <TouchableHighlight style={styles.button}>
                                <Text style={{ color: 'white' }}>Register</Text>
                            </TouchableHighlight>
                            
                        
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
        marginBottom:15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    formBox: {
        backgroundColor: '#002333',
        justifyContent:'space-around',
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,


    },

  
    inputField: {

        height:55,
        backgroundColor: 'rgb(6,46,64)',
        borderRadius: 4,
        marginVertical: 6,
        padding: 16,
        color:'white',
        fontSize:15,

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
        marginTop:25,
        marginBottom:10,



    }

})