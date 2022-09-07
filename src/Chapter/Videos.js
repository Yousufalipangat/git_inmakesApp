import React,{Component} from "react";

import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    TouchableHighlight,
    
    

} from 'react-native';


import Video from "react-native-video";

import  Icon from "react-native-vector-icons/FontAwesome";

export default class Videos  extends Component{

render(){
    return(
        <ScrollView style={video_style.container} contentContainerStyle={{flexGrow:1}}>
            <View style={video_style.video}>
               
                <Video
                source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
                style={{ width: '100%', height: '100%' }}
                controls={true}
                paused={true}
                ref={(ref) => {
                this.player = ref}}
                resizeMode='stretch'
                
                />
               
              
              
            </View>
            <View style={video_style.bottom_container}>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:15}}>
                    <View>
                    <Text style={{color:'#eee',fontWeight:'700',fontSize:17, letterSpacing:.6,width:250}}>Long Chapter Name can be shown here</Text>
                    </View>
                    <Icon name="download" size={25} color='white'/>
                

                </View>
                <View style={video_style.slide_tile} >
                    <View style={video_style.slide_tile}>
                        <Icon name='angle-left' size={23} color='#aaa'/> 
                        <Text style={{color:'#aaa',marginLeft:10}}>Previous</Text>
                    </View>
                    <View style={video_style.slide_tile}>
                        <Icon name='dot-circle-o' size={18} color='#00c458'/>
                        <Text style={{color:'#00c458'}}> Part 1</Text>
                    </View>
                    <View style={video_style.slide_tile}>
                        <Text style={{color:'#aaa',marginRight:10}}>Next</Text>
                        <Icon name="angle-right" size={23} color='#aaa'/>
                    </View>

                </View>
                <View style={video_style.chat_box}>
                <ScrollView style={{transform:[{scaleY:-1}]}} contentContainerStyle={{}}>
                    <View style={video_style.message}>
                        <View style={{padding:10,}}>
                            <Text style={{color:'#aaa'}}>Your sample question can be shown here no matter how long</Text>

                        </View>
                        <Icon name="comment" size={25} color="#aaa" />
                    </View>

                </ScrollView>
                </View>
                <KeyboardAvoidingView style={video_style.Q_box}>
                    <TextInput placeholder="Add a question?" placeholderTextColor={'#aaa'} style={{height:60,width:'80%',color:'white'}}/>
                    <TouchableHighlight style={{backgroundColor:'white',justifyContent:'center',alignItems:'center', borderRadius:5,width:80,height:40}}>
                        <Text style={{fontWeight:'bold'}}>Post</Text>

                    </TouchableHighlight>
                </KeyboardAvoidingView>
                <TouchableHighlight style={video_style.bottom_button}>
                       <View style={{flexDirection:'row'}}> 
                        <Icon name='whatsapp' size={23} color={'#00c458'}/>
                        <Text style={{fontWeight:'bold' ,color:'#00c458'}}>  Chat with teacher</Text>
                        </View>

                </TouchableHighlight>

            </View>
        
        </ScrollView>

    )
}

}

const video_style=StyleSheet.create({
container:{
    width:'100%',
   // height:'100%',

},
video:{
    
    height:250,
    width:'100%',

},
bottom_container:{
    backgroundColor:'#002333',
    width:'100%',
    height:'100%',
    paddingHorizontal:25,
}
,
slide_tile:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
   
    

},
chat_box:{
    width:'100%',
    height:250,
   
    

},
Q_box:{
    backgroundColor:'rgb(4,46,64)',
    justifyContent:'space-between',
    alignItems:'center',
     height:60,
     padding:10,
     flexDirection:'row',
     

},
message:{
    backgroundColor:'black',
    borderRadius:5,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    justifyContent:'center',
    alignItems:'center',
    transform:[{scaleY:-1}],
    marginVertical:10,

}
,
bottom_button:{
    marginTop:15 ,
    justifyContent:'center',
    alignItems:'center', 
    borderRadius:5,
    width:'100%',
    height:55,
    borderColor:'#00c458',
    borderWidth:2

}

})