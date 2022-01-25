import * as React from 'react';
import { Button, View, Text } from 'react-native';


const Home = ({navigation}) => {
    return (
        <View >
          <Text>Home</Text>
          <Text>Bienvenido. ¿Buscás alguien que cree tu proyecto? ¿Podés crear los proyectos de otros?
            Aprendé más de cómo funciona, registrate y formá parte del clan.
          </Text>
          
          
          <Button
            title="Lista de ideologos"
            onPress={() => navigation.navigate('ApiTest')}
          />
          <Button
            title="Registrate"
            onPress={() => navigation.navigate('Register')}
          />

        </View>
      );
    }
    
    export default Home
