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

const data_Board=[
{label:'CBSE',value:'CBSE'},
{label:'NIOS',value:'NIOS'},
{label:'CISCE',value:'CISCE'},
]

const data_Class=[
    {label:'1',value:'1'},
    {label:'11',value:'11'},
    {label:'111',value:'111'},
    {label:'1V',value:'1V'},
    {label:'V',value:'V'},
    {label:'V1',value:'V1'},
    ]

export default class SchoolBoard extends Component {

    constructor() {
        super();
        this.state = {
            class:'',
            board:'',

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
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#444' }}>Select your school board</Text>
                      </View>

                    <View style={styles.formBox}>
                        
                            <View style={{  width: '88%', justifyContent: 'center' }}>
                               <Dropdown placeholder="Select state" placeholderStyle={{color:'#555'}}
                                selectedTextStyle={{color:'white'}}
                                containerStyle={{borderRadius:10,backgroundColor:'rgb(6,46,64)',borderColor:'#002356'}}
                                renderItem={(item)=>(<View style={{width:'100%',height:50,paddingLeft:10,justifyContent:'center'}}><Text style={{color:'#555'}}>{item.value}</Text></View>)}
                                value={this.state.state}
                                style={[styles.inputField]}
                                dropdownPosition='auto'
                                valueField='value' labelField="label" data={data_Board}
                                onChange={(value)=>{this.state.value=value}}/>
                              
                              <Dropdown placeholder="Select state" placeholderStyle={{color:'#555'}}
                                selectedTextStyle={{color:'white'}}
                                containerStyle={{borderRadius:10,backgroundColor:'rgb(6,46,64)',borderColor:'#002356'}}
                                renderItem={(item)=>(<View style={{width:'100%',height:50,paddingLeft:10,justifyContent:'center'}}><Text style={{color:'#555'}}>{item.value}</Text></View>)}
                                value={this.state.state}
                                style={[styles.inputField]}
                                dropdownPosition='auto'
                                valueField='value' labelField="label" data={data_Class}
                                onChange={(value)=>{this.state.value=value}}/>
                              

                             </View>

                            <TouchableHighlight style={styles.button}>
                                <Text style={{ color: 'white' }}>Continue</Text>
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
        padding:10,
        paddingTop:20,



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