/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Register from './src/Register';
import OTP from './src/OTP';
import StudentDetails from './src/StudentDetails';
import SchoolBoard from'./src/SchoolBoard';
import AppTour from './src/AppTour';
import Home from './src/Tabbar/Home';
import PageRouter from './src/PageRouter';
import Course from './src/Course/Course';
import Chapter from './src/Chapter/Chapter';
import Videos from './src/Chapter/Videos'

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Videos);
