
import React from "react";


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

import Home, { Home_header } from "./Tabbar/Home";
import Contact from "./Tabbar/Contact";
import Recent from "./Tabbar/Recent";
import Exam from "./Tabbar/Exam";
import Profile from "./Tabbar/Profile";
import { View, Text } from "react-native";
import CustTabBar from './Tabbar/CustTabBar';
import CustDrawer from "./Drawer/CustDrawer";

const dark = '#002333';
const green = '#00c458';

function StackList() {
    return (
        <Stack.Navigator>
            
            <Stack.Screen
        
                name='Drawer'
                component={DrawerList}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )

    
    function DrawerList(){
        return(
            <Drawer.Navigator
            drawerContent={(props)=><CustDrawer {...props}/>}
            >
                <Drawer.Screen
                name="bottomTab"
                component={BottomTabList}
                options={{headerShown:false,
                
                }}
                />
            </Drawer.Navigator>
        )
    }

    function BottomTabList() {
        return (
            <BottomTab.Navigator
            tabBar={props=><CustTabBar {...props}/>}
            >
                <BottomTab.Screen name="Home" component={Home}
                    options={{
                        
                        header: (props)=> <Home_header {...props} />,
                       
                    }}
                />
                <BottomTab.Screen name="Recent" component={Recent}
                   
                />
                <BottomTab.Screen name="Exam" component={Exam}
                   
                />
                <BottomTab.Screen name="Profile" component={Profile}
                   
                />
                <BottomTab.Screen name="Contact" component={Contact}
                  
                />
            </BottomTab.Navigator>
        )
    }

}

export default function PageRouter() {
    return (
        <NavigationContainer>
            <StackList />

        </NavigationContainer>
    )
}



