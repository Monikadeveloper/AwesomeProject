import React from 'react';

import { SafeAreaView, StyleSheet, View } from 'react-native';
import MainScreen from './Components/MainScreen';
import Registration from './Components/Registration';
import LoginScreen from './Components/LoginScreen';
import Dashboard from './Components/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
   
    
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Register" component={Registration} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>

        </NavigationContainer>
      
   

  );
}

const styles = StyleSheet.create({});

export default App;