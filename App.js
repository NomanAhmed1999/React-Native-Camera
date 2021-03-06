// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Home from './src/screens/Home.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './src/screens/About.js';
import Cameraa from './src/screens/camera.js';
import SignUp from './src/screens/signUp.js'
import * as Facebook from 'expo-facebook';



export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createMaterialTopTabNavigator();
 
  return (
    <NavigationContainer>
    <Tab.Navigator
     screenOptions={{
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 150 },
    tabBarStyle: { backgroundColor: '#3273f1' },
    tabBarActiveTintColor : '#ffffff',

    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About Screen" component={About} />
      <Tab.Screen name="Camera Screen" component={Cameraa} />
      <Tab.Screen name="SignUp Form" component={SignUp} />
    </Tab.Navigator>
  </NavigationContainer>





  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
