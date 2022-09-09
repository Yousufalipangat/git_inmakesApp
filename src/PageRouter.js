
import React from "react";


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

import Register from './Register';
import OTP from './OTP';
import StudentDetails from './StudentDetails';
import SchoolBoard from './SchoolBoard'
import AppTour from './AppTour';

import Home, { Home_header } from "./Tabbar/Home";
import Contact from "./Tabbar/Contact";
import Recent from "./Tabbar/Recent";
import Exam from "./Tabbar/Exam";
import Profile from "./Tabbar/Profile";
import Course from './Course/Course';
import Chapter from "./Chapter/Chapter";
import Videos from "./Chapter/Videos";

import CustTabBar from './Tabbar/CustTabBar';
import CustDrawer from "./Drawer/CustDrawer";

const dark = '#002333';
const green = '#00c458';

function StackList() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='OTP'
                component={OTP}
                options={{ headerShown: false }}

            />
            <Stack.Screen
                name='StudentDetails'
                component={StudentDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SchoolBoard"
                component={SchoolBoard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AppTour"
                component={AppTour}
                options={{ headerShown: false }}
            />

            <Stack.Screen

                name='Drawer'
                component={DrawerList}
                options={{
                    headerShown: false,
                }} />
        </Stack.Navigator>
    )


    function DrawerList() {
        return (
            <Drawer.Navigator
                drawerContent={(props) => <CustDrawer {...props} />}
            >
                <Drawer.Screen
                    name="bottomTab"
                    component={BottomTabList}
                    options={{
                        headerShown: false,

                    }}
                />
            </Drawer.Navigator>
        )
    }

    function BottomTabList(props) {
        return (
            <BottomTab.Navigator
               tabBar={props => <CustTabBar {...props} />}
            >
                <BottomTab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: (props) => <Home_header {...props} />,

                    }}
                />
                <BottomTab.Screen
                    name="Recent"
                    component={Recent}
                    options={{
                        headerShown: false
                    }}
                />
                <BottomTab.Screen
                    name="Exam"
                    component={Exam}
                    options={{
                        headerShown: false
                    }}
                />
                <BottomTab.Screen {...props}
                    name="Profile"
                    component={Profile}
                    options={{
                        
                        headerShown: false
                    }}
                />
                <BottomTab.Screen
                    name="Contact"
                    component={Contact}
                    options={{
                        headerShown: false
                    }}
                />
                <BottomTab.Screen
                    name='Course'
                    component={Course}
                    options={{headerShown:false}}
                />
                <BottomTab.Screen
                name='Chapter'
                component={Chapter}
                options={{headerShown:false}}
                />
                <BottomTab.Screen
                name="VideosScreen"
                component={Videos}
                options={{headerShown:false}}
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



