import 'react-native-gesture-handler';
import * as React from 'react';
import CustomStyle from './src/constants/CustomStyle';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
const Drawer = createDrawerNavigator();

function App() {
  
  return (
    <Provider store={store}>
    <View style={[CustomStyle.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "#969696" }}></View>
      <View style={{ flex: 4, backgroundColor: "#212121" }} >
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Home"
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#ffffff',
                width: 240,
              },
              drawerType: 'slide',
          }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Register" component={Register} />
          
          </Drawer.Navigator>
  
        </NavigationContainer>
      </View>
      <View style={{ flex: 1, backgroundColor: "#414141" }}>
        <Text>
          
        </Text>
      </View>

    </View>
    </Provider>
  );
}

export default App;
