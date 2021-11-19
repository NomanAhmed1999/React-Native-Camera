import React, {useState} from 'react';

// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Text, View, StyleSheet, ScrollView, Button, TextInput, TouchableOpacity } from "react-native"
// import { auth, signInWithPopup, fbprovider } from "../firebase/firebase.js";
// import { auth, signInWithPopup, provider } from "../firebase/firebase";
import * as Facebook from 'expo-facebook';

const SignUp = ({route, navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Stack = createNativeStackNavigator();




const fbSignUp = async () => {

  try {
    await Facebook.initializeAsync({
      appId: 448561406857378,
    });
    const {
      type,
      token,
      expirationDate,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    } else {
      // type === 'cancel'
    }
  } catch ({ message }) {
    alert(`Facebook Login Errors: ${message}`);
  }

}







    return (
<View style = {{margin : '5%'}} ><Text>Sign Up</Text>
<Text style = {{display : 'inline'}} > Email </Text><TextInput
    style = {{backgroundColor : "#0000ff2e", padding: '2%', margin: '1%', fontSize: '1.3rem', border : '1px groove black'}}
        onChangeText = {(e) => {setEmail(e)}}
        value={email}
        placeholder = 'enter your email'
      />
<Text style = {{display : 'inline'}} > Password </Text><TextInput
    style = {{backgroundColor : "#0000ff2e", padding: '2%', margin: '1%', fontSize: '1.3rem', border : '1px groove black'}}
        onChangeText = {(e) => {setPassword(e)}}
        value={password}
        placeholder = 'enter your password'
      />
<TouchableOpacity>
    <Button
    style = {{backgroundColor : "#0000ff2e", padding: '2%', margin: '1%', fontSize: '1.3rem', border : '1px groove black'}}
        onChangeText = {(e) => {setPassword(e)}}
        value={password}
        title = {'SignUp'}
        onPress = {fbSignUp}
        placeholder = 'enter your password'
        ><Text>SignUp</Text></Button></TouchableOpacity>



</View>
    );
}


export default SignUp;
