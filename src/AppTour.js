import React ,{Component} from "react";

import {
     View,
     StyleSheet,
     Text,
     TouchableHighlight,


} from 'react-native';
import  Icon from "react-native-vector-icons/MaterialIcons";

export default  class AppTour extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.image}>

                </View>
                <View style={styles.messageBox}>
                        <Text style={{ fontWeight: '700', fontSize: 20, color: '#444' }}>App tour title</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#bbb' }}>The app tour description goes here</Text>
                </View>
                    <View style={{backgroundColor:'white',borderColor:'#00c458',margin:20,borderWidth:2,padding:3,borderRadius:15}}>
                <TouchableHighlight style={styles.button}>
                     <Icon name='forward' size={27} color='white'  />
                </TouchableHighlight>
                    </View>

            </View>
        )
    }

}

const styles=StyleSheet.create({

    container:{
        padding:10,
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between'
    },

    image:{
        width:'100%',
        height:500,
        backgroundColor:'#eee',
        borderRadius:8,
    },
    messageBox:{
        width: '100%',
        marginBottom:15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor:'#00c458',
        width:55,
        height:55,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        

    }
})