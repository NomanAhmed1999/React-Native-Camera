import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native"
import { Camera } from 'expo-camera';


const Cameraa = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

    const Stack = createNativeStackNavigator();



    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);


    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }








    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width : '100px', height : '100px', backgroundColor : "orange"  }}>
        <Text>Camera Screen</Text>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',width : '100%', height : '100%', backgroundColor : "red"}}>
      <Camera style={{width : '90%', height : '90%'}} type={type}>
        <View>
          <TouchableOpacity
            style={{margin : 10, backgroundColor : "orange"}}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{margin : 10}}> Click </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
      </View>
    );
}


export default Cameraa;