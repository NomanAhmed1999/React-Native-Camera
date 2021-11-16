// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import img1 from "../images/img1.jpg"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





const  Home = ({ navigation }) => {

    const Tab = createMaterialTopTabNavigator();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <img style={{ width: 550, height: 500 }} src = {img1} />
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('About Screen')}
          />
        </View>
      );
}
export default Home;