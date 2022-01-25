import * as React from 'react';
import { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
const ApiTest = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'http://127.0.0.1:8000/ideologist/');
    const datos = result.data;
    setData(datos);
    
  }, []);

  console.log(data);
  return (
    <Text>
      
      {data.map((dat, idx) => (
        <p key={idx}>{dat.username}</p>
      ))}
      
      
      </Text>
    
  );
}

    export default ApiTest
