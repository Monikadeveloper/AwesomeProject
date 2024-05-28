import {
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const Registration = () => {
    return (
      <View style={{backgroundColor: '#F0F4F3'}}>
        
        <Image
          source={{
            uri: '/Users/dr.mac/Desktop/reactnative/AwesomeProject/Components/shape.png',
          }}
          style={styles.ImageTop}
        />
       
        <Text style={styles.text1}>Welcome to Onboard!</Text>
        <Text style={styles.text2}>
          Let's help to meet up your 
        </Text>
        <Text style={styles.text4}>
          tasks.
        </Text>
        <TextInput
       style={styles.input1}
       placeholder='Enter your full name'
      />
        <TextInput
       style={styles.input1}
       placeholder='Enter your Email'
      />
        <TextInput
       style={styles.input1}
       placeholder='Enter Password'
      />
        <TextInput
       style={styles.input1}
       placeholder='Confirm password'
      />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.ButtonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>Already have an account ? Sign in</Text>
      </View>
    );
  };
  
  export default Registration;
  
  const styles = StyleSheet.create({
    text1: {
      fontStyle:'normal',
      fontWeight: 'bold',
      fontSize: 18,
      width:204,
      height:27,
    marginLeft: 87,
    marginTop:0,
    marginBottom:10,
    
    color:'#000000'
    },
    text2: {
      fontStyle: 'normal',
      textAlign: 'center',
      fontWeight: 400,
      fontSize: 13,
      color:'#000000',
      
    },
    text4:{
        fontSize:13,
        fontWeight:400,
        fontStyle:'normal',
      textAlign:'center',
      marginBottom:20,

    },
    text3:{
        fontStyle:'normal',
        textAlign:'center',
        marginLeft:40,
        fontWeight:400,
        fontSize:16,
        
        width:272,
        height:25

    },
    input1:
    {
        height: 40, marginLeft:23,marginRight:23,borderRadius:25,padding:10,margin:10, backgroundColor:'white',color:'black'},
    addButton: {
      backgroundColor: '#50C2C9',
      padding: 10,
      borderRadius: 5,
      margin: 15,
      height: 50,
      marginTop: 40,
    },
    ButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      padding: 8,
    },
    Image: {
      height: 150,
      width: 200,
      marginLeft: 60,
      marginTop: 0,
      marginBottom:10
    },
    ImageTop: {
      height: 270,
      width: 300,
      marginLeft: -87,
      marginTop:-100
    
    },
  });