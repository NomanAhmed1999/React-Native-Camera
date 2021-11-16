import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View, StyleSheet, ScrollView, Button } from "react-native"



const About = ({route, navigation}) => {

    const Stack = createNativeStackNavigator();
    // const { name, RollNo } = route.params;
    // console.log(name, RollNo)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Camera"
          onPress={() => navigation.navigate('Camera Screen')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
}


export default About;



const styles = StyleSheet.create({
    homeText : {
    // flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    color : "red"
    },
    container : {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    }

})