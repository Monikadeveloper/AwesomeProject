import React from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import MainScreen from './Components/MainScreen';
import Registration from './Components/Registration';
import LoginScreen from './Components/LoginScreen';
import Dashboard from './Components/Dashboard';



function App() {
  return (
       <SafeAreaView>
        <View>
          {/* <MainScreen/> */}
         <Registration/>
         {/* <LoginScreen/> */}
         {/* <Dashboard/> */}
          
        </View>
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({});

export default App;