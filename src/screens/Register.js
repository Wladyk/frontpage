import * as React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Button, View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import axios from 'axios';
import CustomStyle from '../../src/constants/CustomStyle';
import SelectDropdown from 'react-native-select-dropdown';
const Register = ({navigation}) => {

  const jobs = ["Ideólogo", "Builder"];
  const [datosuser, setState] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    job_type: 1
  })
  const registerUser = async () => {


  try {
        
        // axios automatically serializes the payload to JSON.
        // no need to JSON.stringify({ userid: 42, ...})
        const res = await axios.post('http://127.0.0.1:8000/auth/users/', datosuser);
        console.log(res.data);
        navigation.navigate('Success');
  } catch(error) {
        console.log(error)
  }
}
  return (
    <View style={styles.container}>
    
      
      <TextInput 
          placeholder="Nombre"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={(inputName) => setState({...datosuser, first_name: inputName })}
          />
    
      <TextInput 
          placeholder="Apellido"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={(inputSurname) => setState({...datosuser, last_name: inputSurname })}
          />

            <TextInput 
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={(inputEmail) => setState({...datosuser, email: inputEmail })}
          />
      <TextInput 
          placeholder="username"
          secureTextEntry={false}
          underlineColorAndroid='transparent'
          onChangeText={(inputUsername) => setState({...datosuser, username: inputUsername })}
          />
        
    
      <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={(inputPassword) => setState({...datosuser, password: inputPassword })}
          />
    
    <SelectDropdown
    data={jobs}
    onSelect={(selectedItem, index) => {
      // Code taken from official site, just a mockup not customized at all yet
      (index) => updateState({...datosuser, job_type: index })
      console.log(selectedItem, index)
    }}
    buttonTextAfterSelection={(selectedItem, index) => {
      // text represented after item is selected
      // if data array is an array of objects then return selectedItem.property to render after item is selected
      return selectedItem
    }}
    rowTextForSelection={(item, index) => {
      // text represented for each item in dropdown
      // if data array is an array of objects then return item.property to represent item in dropdown
      return item
    }}
  />
  
    <TouchableHighlight onPress={registerUser} style={[styles.buttonContainer, styles.signupButton]} >
      <Text style={styles.signUpText}>Sign up</Text>
    </TouchableHighlight>
  </View>
  );
}


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#00b5ec',
},
inputContainer: {
  borderBottomColor: '#F5FCFF',
  backgroundColor: '#FFFFFF',
  borderRadius:30,
  borderBottomWidth: 1,
  width:250,
  height:45,
  marginBottom:20,
  flexDirection: 'row',
  alignItems:'center'
},
inputs:{
  height:45,
  marginLeft:16,
  borderBottomColor: '#FFFFFF',
  flex:1,
},
inputsSelect:{
  height:45,
  width:10,
  marginLeft:0,
  borderBottomColor: '#FFFFFF',
  flex:1,
},
inputIcon:{
width:30,
height:30,
marginLeft:15,
justifyContent: 'center'
},
buttonContainer: {
height:45,
flexDirection: 'row',
justifyContent: 'center',
alignItems: 'center',
marginBottom:20,
width:250,
borderRadius:30,
},
signupButton: {
backgroundColor: "#FF4DFF",
},
signUpText: {
color: 'white',
}
});
    export default Register
